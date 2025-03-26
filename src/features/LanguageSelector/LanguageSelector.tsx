import { useContext, useState } from 'react';

import { AppButton } from '@/components/AppButton';
import { LanguagesContext, SettingsContext } from '@/contexts';
import type { ExtendedTranslatedLanguages, SupportedLanguages } from '@/i18n';

import { LanguagButtonsArea, LanguageSelectorButtonsOverlay, LanguageSelectorWrapper } from './styled';

const SUPPORTED_LANGUAGES: ExtendedTranslatedLanguages = {
	en: 'English',
	pt: 'Português',
	es: 'Español',
	ru: 'Русский язык',
	fr: 'Français',
	de: 'Deutsch',
	jp: '日本語',
};

export const LanguageSelector = () => {
	const [displayOptions, toggleDisplayOptions] = useState(false);
	const { changeLanguage, getText } = useContext(LanguagesContext);
	const { toggleUseTextRunes } = useContext(SettingsContext);

	return (
		<LanguageSelectorWrapper>
			<AppButton onClick={() => toggleDisplayOptions(true)}>
				{getText('Change Language')}
			</AppButton>

			{displayOptions && (
				<LanguageSelectorButtonsOverlay>
					<LanguagButtonsArea
						onClick={() => {
							toggleDisplayOptions(false);
						}}
					>
						{Object.entries(SUPPORTED_LANGUAGES).map(([language, name]) => (
							<AppButton
								key={language}
								onClick={() => {
									const lang = language as SupportedLanguages;
									changeLanguage(lang);
									toggleDisplayOptions(false);

									if (lang !== 'en' && lang !== 'es') {
										toggleUseTextRunes();
									}
								}}
								styles={{ width: 160 }}
							>
								{name}
							</AppButton>
						))}
					</LanguagButtonsArea>
				</LanguageSelectorButtonsOverlay>

			)}
		</LanguageSelectorWrapper>
	);
};
