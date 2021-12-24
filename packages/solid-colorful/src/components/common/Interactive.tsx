import { createMemo, onCleanup, PropsWithChildren, splitProps } from "solid-js";
import { useRef } from "solid-react-compat";
import { useEventCallback } from "../../hooks/useEventCallback";
import { clamp } from "../../utils/clamp";

export interface Interaction {
  left: number;
  top: number;
}

// Check if an event was triggered by touch
const isTouch = (event: MouseEvent | TouchEvent): event is TouchEvent =>
  "touches" in event;

// Finds a proper touch point by its identifier
const getTouchPoint = (touches: TouchList, touchId: null | number): Touch => {
  for (let i = 0; i < touches.length; i++) {
    if (touches[i].identifier === touchId) return touches[i];
  }
  return touches[0];
};

// Finds the proper window object to fix iframe embedding issues
const getParentWindow = (node?: HTMLDivElement | null): Window => {
  return (node && node.ownerDocument.defaultView) || self;
};

// Returns a relative position of the pointer inside the node's bounding box
const getRelativePosition = (
  node: HTMLDivElement,
  event: MouseEvent | TouchEvent,
  touchId: null | number
): Interaction => {
  const rect = node.getBoundingClientRect();

  // Get user's pointer position from `touches` array if it's a `TouchEvent`
  const pointer = isTouch(event)
    ? getTouchPoint(event.touches, touchId)
    : (event as MouseEvent);

  return {
    left: clamp(
      (pointer.pageX - (rect.left + getParentWindow(node).pageXOffset)) /
        rect.width
    ),
    top: clamp(
      (pointer.pageY - (rect.top + getParentWindow(node).pageYOffset)) /
        rect.height
    ),
  };
};

// Browsers introduced an intervention, making touch events passive by default.
// This workaround removes `preventDefault` call from the touch handlers.
// https://github.com/facebook/react/issues/19651
const preventDefaultMove = (event: MouseEvent | TouchEvent): void => {
  !isTouch(event) && event.preventDefault();
};

// Prevent mobile browsers from handling mouse events (conflicting with touch ones).
// If we detected a touch interaction before, we prefer reacting to touch events only.
const isInvalid = (
  event: MouseEvent | TouchEvent,
  hasTouch: boolean
): boolean => {
  return hasTouch && !isTouch(event);
};

interface Props {
  onMove: (interaction: Interaction) => void;
  onKey: (offset: Interaction) => void;
}

export const Interactive = (props: PropsWithChildren<Props>) => {
  const container = useRef<HTMLDivElement>(null);
  const touchId = useRef<number>(null);
  let hasTouch = false;

  const data = createMemo(() => {
    const handleMoveStart = (nativeEvent) => {
      const el = container.current;
      if (!el) return;

      // Prevent text selection
      preventDefaultMove(nativeEvent);

      if (isInvalid(nativeEvent, hasTouch) || !el) return;

      if (isTouch(nativeEvent)) {
        hasTouch = true;
        const changedTouches = nativeEvent.changedTouches || [];
        if (changedTouches.length)
          touchId.current = changedTouches[0].identifier;
      }

      el.focus();
      props.onMove(getRelativePosition(el, nativeEvent, touchId.current));
      toggleDocumentEvents(true);
    };

    const handleMove = (event: MouseEvent | TouchEvent) => {
      // Prevent text selection
      preventDefaultMove(event);

      // If user moves the pointer outside of the window or iframe bounds and release it there,
      // `mouseup`/`touchend` won't be fired. In order to stop the picker from following the cursor
      // after the user has moved the mouse/finger back to the document, we check `event.buttons`
      // and `event.touches`. It allows us to detect that the user is just moving his pointer
      // without pressing it down
      const isDown = isTouch(event)
        ? event.touches.length > 0
        : event.buttons > 0;

      if (isDown && container.current) {
        props.onMove(
          getRelativePosition(container.current, event, touchId.current)
        );
      } else {
        toggleDocumentEvents(false);
      }
    };

    const handleMoveEnd = () => toggleDocumentEvents(false);

    const handleKeyDown = (event) => {
      const keyCode = event.which || event.keyCode;

      // Ignore all keys except arrow ones
      if (keyCode < 37 || keyCode > 40) return;
      // Do not scroll page by arrow keys when document is focused on the element
      event.preventDefault();
      // Send relative offset to the parent component.
      // We use codes (37←, 38↑, 39→, 40↓) instead of keys ('ArrowRight', 'ArrowDown', etc)
      // to reduce the size of the library
      props.onKey({
        left: keyCode === 39 ? 0.05 : keyCode === 37 ? -0.05 : 0,
        top: keyCode === 40 ? 0.05 : keyCode === 38 ? -0.05 : 0,
      });
    };

    function toggleDocumentEvents(state?: boolean) {
      const el = container.current;
      const parentWindow = getParentWindow(el);

      // Add or remove additional pointer event listeners
      const toggleEvent = state
        ? parentWindow.addEventListener
        : parentWindow.removeEventListener;
      toggleEvent(hasTouch ? "touchmove" : "mousemove", handleMove);
      toggleEvent(hasTouch ? "touchend" : "mouseup", handleMoveEnd);
    }

    return { handleMoveStart, handleKeyDown, toggleDocumentEvents };
  });

  // Remove window event listeners before unmounting
  onCleanup(() => {
    data().toggleDocumentEvents;
  });

  const [_, rest] = splitProps(props, ["onMove", "onKey"]);

  return (
    <div
      {...rest}
      ontouchstart={data().handleMoveStart}
      onmousedown={data().handleMoveStart}
      className="react-colorful__interactive"
      ref={(el) => (container.current = el)}
      onKeyDown={data().handleKeyDown}
      tabIndex={0}
      role="slider"
    />
  );
};
