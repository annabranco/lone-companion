import { Genders } from '@/constants';
import { TRANSLATIONS } from './translations';
import { SupportedLanguages } from './types';

export const gendersForTranslation = {
	[Genders.Woman]: 'woman',
	[Genders.Man]: 'man',
	[Genders.GNC]: 'gnc',
};

interface Translate {
	text: string;
	genderModifier?: Genders;
	language: SupportedLanguages;
}

export const translate = ({ text, genderModifier, language }: Translate) => {
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

	return TRANSLATIONS[text] ? TRANSLATIONS[text][language] : text;
};
