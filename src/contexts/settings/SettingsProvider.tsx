import { PropsWithChildren, useCallback } from 'react';

import { defaultState } from '../../config';
import { LOCAL_STORAGE_KEYS, useLocalStorage } from '../../hooks';
import { SettingsState, Theme } from '../../types';
import { SettingsContext } from './SettingsContext';

export const SettingsProvider = ({ children }: PropsWithChildren) => {
	const [settings, saveSettings] = useLocalStorage<SettingsState>(
		LOCAL_STORAGE_KEYS.SETTINGS,
		defaultState.settings,
	);

	const toggleDarkMode = useCallback(() => {
		const newTheme = settings.theme === Theme.Dark ? Theme.Light : Theme.Dark;

		saveSettings({
			...settings,
			theme: newTheme,
		});
	}, [saveSettings, settings]);

	const toggleDisplayButtonsLabel = useCallback(() => {
		saveSettings({
			...settings,
			displayButtonsLabel: !settings.displayButtonsLabel,
		});
	}, [saveSettings, settings]);

	const toggleHideButtonsText = useCallback(() => {
		saveSettings({
			...settings,
			hideButtonsText: !settings.hideButtonsText,
			displayButtonsLabel: !settings.hideButtonsText,
		});
	}, [saveSettings, settings]);

	const toggleUseTextRunes = useCallback(() => {
		saveSettings({
			...settings,
			useTextRunes: !settings.useTextRunes,
		});
	}, [saveSettings, settings]);

	return (
		<SettingsContext.Provider
			value={{
				displayButtonsLabel: settings.displayButtonsLabel,
				hideButtonsText: settings.hideButtonsText,
				theme: settings.theme,
				toggleDarkMode,
				toggleDisplayButtonsLabel,
				toggleHideButtonsText,
				toggleUseTextRunes,
				useTextRunes: settings.useTextRunes,
			}}
		>
			{children}
		</SettingsContext.Provider>
	);
};
