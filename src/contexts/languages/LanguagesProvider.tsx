import { PropsWithChildren, useCallback } from 'react';
import { LanguagesContext } from './LanguagesContext';
import { Genders } from '../../constants';
import { SupportedLanguages, translate } from '../../utils/i18n';
import { LOCAL_STORAGE_KEYS, useLocalStorage } from '../../hooks/useLocalStorage';
import { defaultState } from '../../config/defaultState';

export const LanguagesProvider = ({ children }: PropsWithChildren) => {
	  const [language, changeUserLanguage] = useLocalStorage(LOCAL_STORAGE_KEYS.LANGUAGE, defaultState.language);

	const getText = useCallback(
		(text: string, genderModifier?: Genders) => {
			return translate({ text, genderModifier, language });
		},
		[language]);

	const changeLanguage = useCallback(
		async (language: SupportedLanguages) => {
			changeUserLanguage(language);

		},
		[changeUserLanguage]);

	return (
		<LanguagesContext.Provider value={{ language, changeLanguage, getText }}>
			{children}
		</LanguagesContext.Provider>
	);
};
