import { LanguagesState, SettingsState } from '../types';
import { LogState } from '../contexts/logger';

export enum StateKeys {
	Settings = 'anyas-oracle:settings',
	Language = 'anyas-oracle:language',
	Logs = 'anyas-oracle:logs',
}

type State = SettingsState | LanguagesState | LogState | null;

export const saveData = (key: StateKeys, data: State) => {
	if (key && data) {
		try {
			const jsonData = JSON.stringify(data);

			localStorage.setItem(key, jsonData);
		} catch (e) {
			console.error('Error saving Settings state to localStorage', e);
		}
	}
};

export const getData = <S>(key: StateKeys): S | null => {
	if (key) {
		try {
			const settings = localStorage.getItem(key);

			if (settings) {
				{
					return JSON.parse(settings);
				}
			} else {
				return null;
			}
		} catch (e) {
			console.error('Error retrieving Settings state to localStorage', e);
		}
	}
	return null;
};
