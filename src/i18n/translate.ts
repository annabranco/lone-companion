import { Genders } from '@/constants';
import { TRANSLATIONS } from './translations';
import { ObjectToTranslate } from './types';

export const gendersForTranslation = {
	[Genders.Woman]: 'feminine',
	[Genders.Man]: 'masculine',
	[Genders.GNC]: 'neutral',
};

// translate function is kept outside of LanguageProvider so it is not limited to a custom hook and could be called from any other function
export const translate = ({ text, genderModifier, language }: ObjectToTranslate) => {
	if (genderModifier) {
		const textWithModifier = `${text}::${gendersForTranslation[genderModifier]}`;

		if (TRANSLATIONS[textWithModifier]) {
			return TRANSLATIONS[textWithModifier][language];
		} else if (TRANSLATIONS[text]) {
			return TRANSLATIONS[text][language];
		} else {
			return text;
		}
	}

	if (TRANSLATIONS[text]) {
		return TRANSLATIONS[text][language];
	} 
	
	// This is to avoid translation errors if a term has only gendered translations and not a plain one.	
	if (TRANSLATIONS[`${text}::${[gendersForTranslation[Genders.Man]]}`]) {
		return TRANSLATIONS[`${text}::${[gendersForTranslation[Genders.Man]]}`][language];
	}
	
	return text;
};
