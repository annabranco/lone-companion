/** @jsxImportSource @emotion/react */

import { useContext, useState } from 'react';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import { LanguagesContext } from '../../contexts/languages/LanguagesContext';
import { Colors, OverlayBackground, TextColor } from '../../config';
import { SettingsContext } from '../../contexts/settings/SettingsContext';
import { Theme } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Toggle } from '../../components/Toggle/Toggle';
import { BackButton, SettingsButton, SettingsOverlay, SettingsWrapper, ThemeWrappper, ToggleTexts } from './styled';

export const Settings = () => {
	const { getText, language } = useContext(LanguagesContext);
	const { useTextRunes, toggleUseTextRunes, theme, toggleDarkMode } = useContext(SettingsContext);
	const [displaySettings, toggleDisplaySettings] = useState(false);

	return (
		<>
			{displaySettings ? (
				<SettingsOverlay
					css={OverlayBackground[theme]}
				>
					{/* <LanguageHandler /> */}
					<SettingsWrapper>
						<Toggle
							backgroundColor={{ off: Colors.gray2, on: Colors.blue3 }}
							buttonColor={{ off: Colors.white, on: Colors.gray1 }}
							disabled={language !== 'en' && language !== 'es'}
							isOn={useTextRunes}
							name='settings'
							onValueChange={toggleUseTextRunes}
						/>
						<ToggleTexts disabled={language !== 'en' && language !== 'es'} styles={TextColor[theme]}>
							{getText('Display oracle runes result as text')}
						</ToggleTexts>
					</SettingsWrapper>

					<ThemeWrappper>
						<Toggle
							backgroundColor={{ off: Colors.gray2, on: Colors.blue3 }}
							buttonColor={{ off: Colors.white, on: Colors.gray1 }}
							isOn={theme === Theme.Dark}
							name='theme'
							onValueChange={toggleDarkMode}
						/>
						<ToggleTexts styles={TextColor[theme]}>{getText('Dark mode')}</ToggleTexts>
					</ThemeWrappper>

					<BackButton onClick={() => toggleDisplaySettings(false)}>{getText('Back')}</BackButton>

				</SettingsOverlay>
			) : (
				<SettingsButton onClick={() => toggleDisplaySettings(true)}>
					<FontAwesomeIcon color={theme === Theme.Light ? Colors.blue5 : Colors.gray3} icon={faGear} />
				</SettingsButton>
			)}
		</>
	);
};
