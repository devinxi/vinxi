import { animate, AnimationControls, AnimationListOptions, MotionKeyframesDefinition } from "motion";
import { children, Component, createRenderEffect, JSX, onMount } from "solid-js";

const Animate: Component<{
	keyframes: MotionKeyframesDefinition,
	options?: AnimationListOptions,
	controls?: (controls: AnimationControls) => void,
}> = props => {
	const elements = children(() => props.children);
	onMount(() => {
		if (Array.isArray(elements())) {
			const filteredElements = () => Array(...elements() as JSX.Element[]).filter(e => e instanceof Element);
			createRenderEffect(() => {
				const animation = animate(filteredElements() as Element[], props.keyframes, props.options);
				props.controls?.(animation);
			});
		} else if (elements() instanceof Element) {
			createRenderEffect(() => {
				const animation = animate(elements() as Element[], props.keyframes, props.options);
				props.controls?.(animation);
			});
		};
	});
	return elements;
};

export default Animate;