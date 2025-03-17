import { useState } from 'react';

import { InputElement, InputPlaceholder, InputWrapper } from './styled';

interface InputProps {
	onChange: (value: string) => void;
	placeholder?: string;
	value: string;
}

export const Input = ({ onChange, placeholder, value }: InputProps) => {
	const [isPlaceholderHighlighted, toggleIsPlaceholderHighlighted] = useState(false);

	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.currentTarget;

		if (value) {
			toggleIsPlaceholderHighlighted(true);
		} else {
			toggleIsPlaceholderHighlighted(false);
		}
		onChange(value);
	}

	return (
		<InputWrapper>
			<InputElement
				aria-labelledby={`label-${placeholder?.replace(' ', '')}`}
				autoComplete="off"
				maxLength={40}
				onBlur={() => !value && toggleIsPlaceholderHighlighted(false)}
				onChange={onChangeInput}
				placeholder={placeholder}
				type="text"
				value={value}
			/>
			{isPlaceholderHighlighted && (
				<InputPlaceholder id={`label-${placeholder?.replace(' ', '')}`}>
					{placeholder}
				</InputPlaceholder>
			)}
		</InputWrapper>
	);
};
