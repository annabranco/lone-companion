import { SupportedLanguages } from './utils/i18n';

export interface OptionWithMultiplier<O> {
	option: O;
	multiplier: number;
}

export interface OptionWithWeight<O> {
	option: O;
	weight: number;
}

export enum Theme {
	Dark = 'Dark',
	Light = 'Light',
}

export interface SettingsState {
	useTextRunes: boolean;
	theme: Theme;
}

export type LanguagesState = SupportedLanguages;

export interface LoadedData {
	settings: SettingsState;
	language: SupportedLanguages;
}