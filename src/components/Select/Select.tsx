/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useContext, useState } from 'react';

import { Typography } from '../../components/Typography';
import { Colors, OverlayBackground } from '../../config';
import { LanguagesContext, SettingsContext } from '../../contexts';
import { Theme } from '../../types';

import {
	SelectButton,
	SelectButtonText,
	SelectComponent,
	SelectConfirmButton,
	SelectElement,
} from './styled';

export interface Option {
	default?: boolean;
	label: string;
	value: string;
}

interface SelectProps {
	onSelect?: (option: string) => void;
	options: Option[];
}

export const Select = ({ onSelect, options }: SelectProps) => {
	const [isSelectOpen, toggleSelect] = useState(false);
	const [selectedOption, changeSelectedOption] = useState('');
	const [selectedOptionLabel, changeSelectedOptionLabel] = useState('');
	const { getText } = useContext(LanguagesContext);
	const { theme } = useContext(SettingsContext);

	const themeColors = {
		selectButon: css`
      background-color: ${theme === Theme.Dark ? Colors.blue2 : Colors.blue6};
    `,
		selectButtonText: css`
      color: ${theme === Theme.Dark ? Colors.black : Colors.blue0};
    `,
	};

	const getDefaultOption = () => {
		const defaultOption = options.find((option) => option.default);

		return defaultOption ? defaultOption.label : getText('Click to select');
	};

	const onClickSelect = () => {
		if (onSelect) {
			onSelect(selectedOption);
		}
		toggleSelect(false);
	};

	const onChangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.currentTarget;

		const { label } = options.filter(option => option.value === value)[0];

		changeSelectedOption(value);
		changeSelectedOptionLabel(label);
	};

	return (
		<>
			<SelectButton
				onClick={() => toggleSelect(!isSelectOpen)}
				kind="ghost"
				styles={themeColors.selectButon}
			>
				<SelectButtonText styles={themeColors.selectButtonText}>
					{selectedOptionLabel || getDefaultOption()}
				</SelectButtonText>
			</SelectButton>

			{isSelectOpen && (
				<SelectComponent css={OverlayBackground[theme]}>
					<SelectElement
						defaultValue={selectedOption}
						onChange={onChangeOption}
					>
						{options.map((option) => (
							<option
								key={option.value.replace(' ', '')}
								label={option.label}
								value={option.value}
							/>
						))}
					</SelectElement>
					<SelectConfirmButton onClick={onClickSelect} kind="primary">
						<Typography>{getText('Select')}</Typography>
					</SelectConfirmButton>
				</SelectComponent>
			)}
		</>
	);
};
