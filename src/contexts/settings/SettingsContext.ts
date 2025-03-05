import {createContext} from 'react';
import {SettingsState, Theme} from '../../types';

export interface SettingsContextInterface extends SettingsState {
	toggleUseTextRunes: () => void;
	toggleDarkMode: () => void;
}

const defaultContext: SettingsContextInterface = {
	toggleUseTextRunes: () => null,
	useTextRunes: false,
	theme: Theme.Light,
	toggleDarkMode: () => null,
};

export const SettingsContext = createContext<SettingsContextInterface>(defaultContext);
