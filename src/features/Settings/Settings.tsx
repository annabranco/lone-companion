/** @jsxImportSource @emotion/react */

import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';

import { Toggle } from '../../components/Toggle';
import { Colors, OverlayBackground, TextColor } from '../../config';
import { LanguagesContext, SettingsContext } from '../../contexts';
import { Theme } from '../../types';

import { LanguageSelector } from '../LanguageSelector';
import {
	BackButton,
	MainSettingsWrapper,
	SettingsButton,
	SettingsOverlay,
	SettingsWrapper,
	ThemeWrappper,
	ToggleTexts,
} from './styled';

export const Settings = () => {
	const { getText, language } = useContext(LanguagesContext);
	const { useTextRunes, toggleUseTextRunes, theme, toggleDarkMode } =
		useContext(SettingsContext);
	const [displaySettings, toggleDisplaySettings] = useState(false);

	return (
		<>
			{displaySettings ? (
				<SettingsOverlay css={OverlayBackground[theme]}>
					<SettingsWrapper>
						<MainSettingsWrapper>
							<Toggle
								backgroundColor={{ off: Colors.gray2, on: Colors.blue3 }}
								buttonColor={{ off: Colors.white, on: Colors.gray1 }}
								disabled={language !== 'en' && language !== 'es'}
								isOn={useTextRunes}
								name="settings"
								onValueChange={toggleUseTextRunes}
							/>
							<ToggleTexts
								disabled={language !== 'en' && language !== 'es'}
								styles={TextColor[theme]}
							>
								{getText('Display oracle runes result as text')}
							</ToggleTexts>
						</MainSettingsWrapper>

						<ThemeWrappper>
							<Toggle
								backgroundColor={{ off: Colors.gray2, on: Colors.blue3 }}
								buttonColor={{ off: Colors.white, on: Colors.gray1 }}
								isOn={theme === Theme.Dark}
								name="theme"
								onValueChange={toggleDarkMode}
							/>
							<ToggleTexts styles={TextColor[theme]}>
								{getText('Dark mode')}
							</ToggleTexts>
						</ThemeWrappper>

						<LanguageSelector />
					</SettingsWrapper>

					<BackButton onClick={() => toggleDisplaySettings(false)}>
						{getText('Back')}
					</BackButton>
				</SettingsOverlay>
			) : (
				<SettingsButton
					kind="ghost"
					onClick={() => toggleDisplaySettings(true)}
				>
					<FontAwesomeIcon
						color={theme === Theme.Light ? Colors.blue5 : Colors.gray3}
						icon={faGear}
						size="2xl"
					/>
				</SettingsButton>
			)}
		</>
	);
};
