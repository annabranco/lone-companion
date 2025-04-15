import { PropsWithChildren, useCallback } from 'react';

import { defaultState } from '../../config';
import { Genders } from '../../constants';
import { LOCAL_STORAGE_KEYS, useLocalStorage } from '../../hooks';
import { SupportedLanguages, translate } from '../../i18n';

import { LanguagesContext } from './LanguagesContext';

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
