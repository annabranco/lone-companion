import { LANGUAGES, SupportedLanguages } from '../utils/i18n';
import { SettingsState, Theme } from '../types';

export const defaultSettings: SettingsState = {
	useTextRunes: true,
	theme: Theme.Light,
};

export const defaultLanguage: SupportedLanguages = LANGUAGES.en;

export const defaultState = {
  settings: defaultSettings,
  language: defaultLanguage,
}