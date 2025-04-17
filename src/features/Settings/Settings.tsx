/** @jsxImportSource @emotion/react */

import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';

import { Toggle } from '../../components/Toggle';
import { Typography } from '../../components/Typography';
import { Colors, OverlayBackground } from '../../config';
import { LanguagesContext, SettingsContext } from '../../contexts';
import { Theme } from '../../types';
import { LanguageSelector } from '../LanguageSelector';
import {
	BackButton,
	MainSettingsWrapper,
	OptionGroup,
	SettingsButton,
	SettingsOverlay,
	SettingsWrapper,
} from './styled';

export const Settings = () => {
	const [displaySettings, toggleDisplaySettings] = useState(false);

	const { getText, language } = useContext(LanguagesContext);
	const {
		displayButtonsLabel,
		hideButtonsText,
		theme,
		toggleDarkMode,
		toggleDisplayButtonsLabel,
		toggleHideButtonsText,
		toggleUseTextRunes,
		useTextRunes,
	} = useContext(SettingsContext);

	return (
		<>
			{displaySettings ? (
				<SettingsOverlay css={OverlayBackground[theme]}>
					<SettingsWrapper>
						<MainSettingsWrapper>
							<Toggle
								disabled={language !== 'en' && language !== 'es'}
								label={getText('Display oracle runes result as text')}
								isOn={useTextRunes}
								name="settings"
								onValueChange={toggleUseTextRunes}
							/>

							<Toggle
								isOn={theme === Theme.Dark}
								label={getText('Dark mode')}
								name="theme"
								onValueChange={toggleDarkMode}
							/>

							<OptionGroup>
								<Toggle
									isOn={hideButtonsText}
									label={getText('Hide texts from the main buttons')}
									name="hideButtonsText"
									onValueChange={toggleHideButtonsText}
								/>

								{hideButtonsText && (
									<>
										<Typography color={Colors.gray1}>
											{getText(' ...but display them with the mouse')}
										</Typography>
										<Toggle
											isOn={displayButtonsLabel}
											name="hideButtonsLabel"
											onValueChange={toggleDisplayButtonsLabel}
										/>
									</>
								)}
							</OptionGroup>

							<LanguageSelector />
						</MainSettingsWrapper>
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
