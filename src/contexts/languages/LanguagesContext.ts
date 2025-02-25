import { createContext } from 'react';
import { LANGUAGES, SupportedLanguages } from '../../utils/i18n';

export interface LanguagesContextInterface {
	changeLanguage: (language: SupportedLanguages) => void;
	language: SupportedLanguages;
	getText: (text: string) => string;
}

const defaultContext: LanguagesContextInterface = {
	language: LANGUAGES.en,
	changeLanguage: () => null,
	getText: () => '',
};

export const LanguagesContext = createContext<LanguagesContextInterface>(defaultContext);
