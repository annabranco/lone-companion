import { createContext } from 'react';

import { SettingsState, Theme } from '../../types';

interface SettingsFunctions {
	toggleDarkMode: () => void;
	toggleDisplayButtonsLabel: () => void;
	toggleHideButtonsText: () => void;
	toggleUseTextRunes: () => void;
}

export type SettingsContextInterface = SettingsState & SettingsFunctions; 

const defaultContext: SettingsContextInterface = {
	displayButtonsLabel: false,
	hideButtonsText: false,
	toggleDarkMode: () => null,
	toggleDisplayButtonsLabel: () => null,
	toggleHideButtonsText: () => null,
	toggleUseTextRunes: () => null,
	useTextRunes: false,
	theme: Theme.Light,
};

export const SettingsContext = createContext<SettingsContextInterface>(defaultContext);
