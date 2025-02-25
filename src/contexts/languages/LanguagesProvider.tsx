import { PropsWithChildren, useCallback, useState } from 'react';
import { LanguagesContext } from './LanguagesContext';
import { LanguageProviderProps } from './types';
import { Genders } from '../../constants';
import { LANGUAGES, SupportedLanguages, translate } from '../../utils/i18n';
import { saveData, StateKeys } from '../../utils/stateManager';

const supportedLanguages = Object.keys(LANGUAGES);

export const LanguagesProvider = ({ children, savedLanguage }: PropsWithChildren<LanguageProviderProps>) => {
	const [language, updateLanguage] = useState<SupportedLanguages>(savedLanguage || getLanguage());

	const getText = useCallback(
		(text: string, genderModifier?: Genders) => {
			return translate({ text, genderModifier, language });
		},
		[language]);

	const changeLanguage = useCallback(
		async (language: SupportedLanguages) => {
			updateLanguage(language);

			saveData(StateKeys.Language, {
				current: language,
			});
		},
		[updateLanguage]);

	return (
		<LanguagesContext.Provider value={{ language, changeLanguage, getText }}>
			{children}
		</LanguagesContext.Provider>
	);
};

const getLanguage = (): SupportedLanguages => {
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
