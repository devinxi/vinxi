import { Accessor, createRenderEffect, onMount } from "solid-js";
import { AcceptedElements, animate, AnimationControls, AnimationListOptions, MotionKeyframesDefinition } from "motion";

declare module "solid-js" {
    namespace JSX {
        interface Directives {
            element: AcceptedElements,
            animation: [
                keyframes: MotionKeyframesDefinition,
                options?: AnimationListOptions,
                animationControls?: (controls: AnimationControls) => void,
            ],
        }
    }
};

export const animation = (
    element: AcceptedElements,
    animation: Accessor<[
        keyframes: MotionKeyframesDefinition,
        options?: AnimationListOptions,
        animationControls?: (controls: AnimationControls) => void
    ]>,
) => {
    onMount(() => {
        createRenderEffect(() => {
            const controls = animate(element, animation()[0], animation()[1]);
            animation()[2]?.(controls);
        });
    });
};