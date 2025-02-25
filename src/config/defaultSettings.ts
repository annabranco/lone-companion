import { SettingsState, Theme } from '../types';
import { LANGUAGES, SupportedLanguages } from '../utils/i18n';

export const defaultSettings: SettingsState = {
	useTextRunes: true,
	theme: Theme.Light,
};

export const defaultLanguage: SupportedLanguages = LANGUAGES.en;