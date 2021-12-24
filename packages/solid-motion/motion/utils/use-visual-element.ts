import * as React from "solid-react-compat";
import { useRef, MutableRefObject } from "solid-react-compat";
import { useContext, createEffect } from "solid-js";
import { PresenceContext } from "../../context/PresenceContext";
import { MotionProps } from "../../motion/types";
import { useVisualElementContext } from "../../context/MotionContext";
import { CreateVisualElement, VisualElement } from "../../render/types";
import { useIsomorphicLayoutEffect } from "../../utils/use-isomorphic-effect";
import { VisualState } from "./use-visual-state";
import { LazyContext } from "../../context/LazyContext";
import { MotionConfigProps } from "../../components/MotionConfig";

export function useVisualElement<Instance, RenderState>(
  Component: string | React.ComponentType,
  visualState: VisualState<Instance, RenderState>,
  props: MotionProps & MotionConfigProps,
  createVisualElement?: CreateVisualElement<Instance>
): VisualElement<Instance> | undefined {
  const lazyContext = useContext(LazyContext);
  const parent = useVisualElementContext();
  const presenceContext = useContext(PresenceContext);

  const visualElementRef: MutableRefObject<VisualElement | undefined> =
    useRef(undefined);

  /**
   * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
   */
  if (!createVisualElement) createVisualElement = lazyContext.renderer;

  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component, {
      visualState,
      parent,
      props,
      presenceId: presenceContext?.id,
      blockInitialAnimation: presenceContext?.initial === false,
    });
  }

  const visualElement = visualElementRef.current;
  useIsomorphicLayoutEffect(() => {
    visualElement?.syncRender();
  });

  createEffect(() => {
    visualElement?.animationState?.animateChanges();
  });

  useIsomorphicLayoutEffect(() => () => visualElement?.notifyUnmount(), []);

  return visualElement;
}
