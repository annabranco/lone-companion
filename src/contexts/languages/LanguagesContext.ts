import { createContext } from 'react';
 
import { LANGUAGES, SupportedLanguages } from '@/i18n';
import { Genders } from '@/constants';

export interface LanguagesContextInterface {
	changeLanguage: (language: SupportedLanguages) => void;
	language: SupportedLanguages;
	getText: (text: string, genderModifier?: Genders) => string;
}

const defaultContext: LanguagesContextInterface = {
	language: LANGUAGES.en,
	changeLanguage: () => null,
	getText: () => '',
};

export const LanguagesContext = createContext<LanguagesContextInterface>(defaultContext);
