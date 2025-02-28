import { PropsWithChildren, useCallback } from 'react';
import { SettingsContext } from './SettingsContext';
import { Theme } from '../../types';
import { LOCAL_STORAGE_KEYS, useLocalStorage } from '../../hooks/useLocalStorage';
import { defaultState } from '../../config/defaultState';

export const SettingsProvider = ({ children }: PropsWithChildren) => {
	const [settings, saveSettings] = useLocalStorage(LOCAL_STORAGE_KEYS.SETTINGS, defaultState.settings);


	const toggleDarkMode = useCallback(() => {
		const newTheme = settings.theme === Theme.Dark ? Theme.Light : Theme.Dark;

		saveSettings({
			...settings,
			theme: newTheme,
		});
	}, [saveSettings, settings]);

	const toggleUseTextRunes = useCallback(() => {
		saveSettings({
			...settings,
			useTextRunes: !settings.useTextRunes,
		});
	}, [saveSettings, settings]);

	return (
		<SettingsContext.Provider value={{
			theme: settings.theme,
			toggleDarkMode,
			toggleUseTextRunes,
			useTextRunes: settings.useTextRunes,
		}}>
			{children}
		</SettingsContext.Provider>
	);
};
