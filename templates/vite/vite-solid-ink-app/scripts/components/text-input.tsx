import {Text, createEffect, useInput, createStore, Show} from 'solid-ink'
import chalk from 'chalk';
import type {Except} from 'type-fest';
interface Props {
	/**
	 * Text to display when `value` is empty.
	 */
	placeholder?: string;

	/**
	 * Listen to user's input. Useful in case there are multiple input components
	 * at the same time and input must be "routed" to a specific component.
	 */
	focus?: boolean;

	/**
	 * Replace all chars and mask the value. Useful for password inputs.
	 */
	mask?: string;

	/**
	 * Whether to show cursor and allow navigation inside text input with arrow keys.
	 */
	showCursor?: boolean;

	/**
	 * Highlight pasted text
	 */
	highlightPastedText?: boolean;

	/**
	 * Value to display in a text input.
	 */
	value: string;

	/**
	 * Function to call when value updates.
	 */
	onChange: (value: string) => void;

	/**
	 * Function to call when `Enter` is pressed, where first argument is a value of the input.
	 */
	onSubmit?: (value: string) => void;
}

const TextInput = (props: Props) => {
	const [store, setState] = createStore({
		cursorOffset: (props.value || '').length,
		cursorWidth: 0
	});

	// useEffect(() => {
	// 	setState(previousState => {
	// 		if (!focus || !showCursor) {
	// 			return previousState;
	// 		}

	// 		const newValue = originalValue || '';

	// 		if (previousState.cursorOffset > newValue.length - 1) {
	// 			return {
	// 				cursorOffset: newValue.length,
	// 				cursorWidth: 0
	// 			};
	// 		}

	// 		return previousState;
	// 	});
	// }, [originalValue, focus, showCursor]);

	const cursorActualWidth = () =>
		props.highlightPastedText ? store.cursorWidth : 0;

	let value = () => {
		return props.mask ? props.mask.repeat(props.value.length) : props.value;
	};

	const getValue = () => {
		let renderedValue = value();
		let renderedPlaceholder = props.placeholder
			? chalk.grey(props.placeholder)
			: undefined;

		store.cursorOffset;
		store.cursorWidth;

		// Fake mouse cursor, because it's too inconvenient to deal with actual cursor and ansi escapes
		if (props.showCursor && props.focus) {
			renderedPlaceholder =
				(props.placeholder?.length ?? 0) > 0
					? chalk.inverse(props.placeholder![0]) +
					  chalk.grey(props.placeholder!.slice(1))
					: chalk.inverse(' ');

			renderedValue = value().length > 0 ? '' : chalk.inverse(' ');

			let i = 0;

			for (const char of value()) {
				if (
					i >= store.cursorOffset - cursorActualWidth() &&
					i <= store.cursorOffset
				) {
					renderedValue += chalk.inverse(char);
				} else {
					renderedValue += char;
				}

				i++;
			}

			if (value().length > 0 && store.cursorOffset === value().length) {
				renderedValue += chalk.inverse(' ');
			}
		}

		return [renderedValue, renderedPlaceholder];
	};

	useInput(
		(input, key) => {
			if (
				key.upArrow ||
				key.downArrow ||
				(key.ctrl && input === 'c') ||
				key.tab ||
				(key.shift && key.tab)
			) {
				return;
			}

			if (key.return) {
				if (props.onSubmit) {
					props.onSubmit(props.value);
				}

				return;
			}

			let nextCursorOffset = store.cursorOffset;
			let nextValue = props.value;
			let nextCursorWidth = 0;

			if (key.leftArrow) {
				if (props.showCursor) {
					nextCursorOffset--;
				}
			} else if (key.rightArrow) {
				if (props.showCursor) {
					nextCursorOffset++;
				}
			} else if (key.backspace || key.delete) {
				if (store.cursorOffset > 0) {
					nextValue =
						props.value.slice(0, store.cursorOffset - 1) +
						props.value.slice(store.cursorOffset, props.value.length);

					nextCursorOffset--;
				}
			} else {
				nextValue =
					props.value.slice(0, store.cursorOffset) +
					input +
					props.value.slice(store.cursorOffset, props.value.length);

				nextCursorOffset += input.length;

				if (input.length > 1) {
					nextCursorWidth = input.length;
				}
			}

			if (store.cursorOffset < 0) {
				nextCursorOffset = 0;
			}

			if (store.cursorOffset > props.value.length) {
				nextCursorOffset = props.value.length;
			}

			setState(() => ({
				cursorOffset: nextCursorOffset,
				cursorWidth: nextCursorWidth
			}));

			if (nextValue !== props.value) {
				props.onChange(nextValue);
			}
		},
		{isActive: true}
		// {isActive: focus}
	);

	return (
		<Text>
			<Show
				when={props.placeholder && props.value.length === 0}
				fallback={getValue()[0]}
			>
				{/* {
					? value.length > 0
						? renderedValue */}
				{getValue()[1]}
				{/* : renderedValue} */}
			</Show>
			{/* {getValue()[0]} */}
		</Text>
	);
};

export default TextInput;

// export const UncontrolledTextInput: FC<
// 	Except<Props, 'value' | 'onChange'>
// > = props => {
// 	const [value, setValue] = useState('');

// 	return <TextInput {...props} value={value} onChange={setValue} />;
// };
