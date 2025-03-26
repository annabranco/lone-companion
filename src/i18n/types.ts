export enum LANGUAGES {
	en = 'en',
	es = 'es',
	pt = 'pt',
}

enum EXTENDED_LANGUAGES {
	de = 'de',
	fr = 'fr',
	jp = 'jp',
	ru = 'ru',
}

export interface TranslatedLanguages {
	[LANGUAGES.en]: string;
	[LANGUAGES.es]: string;
	[LANGUAGES.pt]: string;
}

export interface ExtendedTranslatedLanguages extends TranslatedLanguages {
	[EXTENDED_LANGUAGES.de]?: string;
	[EXTENDED_LANGUAGES.fr]?: string;
	[EXTENDED_LANGUAGES.jp]?: string;
	[EXTENDED_LANGUAGES.ru]?: string;
}

export type SupportedLanguages = keyof TranslatedLanguages;

export interface Translations {
	[key: string]: ExtendedTranslatedLanguages;
}
