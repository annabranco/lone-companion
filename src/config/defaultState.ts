import { LANGUAGES, SupportedLanguages } from '../i18n';
import { type SettingsState, Theme } from '../types';

export const defaultSettings: SettingsState = {
  useTextRunes: true,
  theme: Theme.Light,
};

const supportedLanguages = Object.keys(LANGUAGES);

const getDefaultLanguage = (): SupportedLanguages => {
  const defaultLanguage: SupportedLanguages = LANGUAGES.en;
  let navigatorLanguage: string = LANGUAGES.en;

  if (navigator.languages) {
    navigatorLanguage = navigator.languages[0];
  }

  if (supportedLanguages.includes(navigatorLanguage)) {
    return navigatorLanguage as SupportedLanguages;
  }
  return defaultLanguage;
};

export const defaultLanguage: SupportedLanguages = getDefaultLanguage();

export const defaultState = {
  settings: defaultSettings,
  language: defaultLanguage,
}


