import { createEffect, useContext } from "solid-js";
import { AnimationControls } from "src/solid-motion";
import { isAnimationControls } from "../../animation/utils/is-animation-controls";
import { usePresence } from "../../components/AnimatePresence/use-presence";
import { PresenceContext } from "../../context/PresenceContext";
import { createAnimationState } from "../../render/utils/animation-state";
import { AnimationType } from "../../render/utils/types";
import { makeRenderlessComponent } from "../utils/make-renderless-component";
import { FeatureComponents, FeatureProps } from "./types";

export const animations: FeatureComponents = {
  animation: makeRenderlessComponent((props: FeatureProps) => {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    props.visualElement.animationState ||= createAnimationState(
      props.visualElement
    );

    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */
    if (isAnimationControls(props.animate)) {
      createEffect(() =>
        (props.animate as AnimationControls).subscribe(props.visualElement)
      );
    }
  }),
  exit: makeRenderlessComponent((props: FeatureProps) => {
    const [isPresent, safeToRemove] = usePresence();
    const presenceContext = useContext(PresenceContext);

    createEffect(() => {
      props.visualElement.isPresent = isPresent;
      const animation = props.visualElement.animationState?.setActive(
        AnimationType.Exit,
        !isPresent,
        { custom: presenceContext?.custom ?? props.custom }
      );

      !isPresent && animation?.then(safeToRemove);
    });
  }),
};
