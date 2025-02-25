import React, {useContext, useState} from 'react';
import {Modal, Pressable, StyleSheet, View} from 'react-native';
import {AppButton} from '../../components/AppButton/AppButton';
import {SupportedLanguages, TranslatedLanguages} from '../../utils/i18n/types';
import {LanguagesContext} from '../../contexts/languages/LanguagesContext';
import {SettingsContext} from '../../contexts/settings/SettingsContext';

const SUPPORTED_LANGUAGES: TranslatedLanguages = {
	en: 'English',
	pt: 'Português',
	es: 'Español',
	ru: 'Русский язык',
	fr: 'Français',
	de: 'Deutsch',
	jp: '日本語',
};

export const LanguageHandler = () => {
	const [displayOptions, toggleDisplayOptions] = useState(false);
	const {changeLanguage, getText} = useContext(LanguagesContext);
	const {toggleUseTextRunes} = useContext(SettingsContext);

	return (
		<View>
			<AppButton onClick={() => toggleDisplayOptions(true)}>{getText('Change Language')}</AppButton>
			<Modal animationType='fade' transparent={true} visible={displayOptions}>
				<Pressable
					onPressOut={() => {
						toggleDisplayOptions(false);
					}}
					style={styles.languagesSelector}
				>
					{Object.entries(SUPPORTED_LANGUAGES).map(([language, name]) => (
						<AppButton
							key={language}
							onClick={() => {
								const lang = language as SupportedLanguages;
								changeLanguage(lang);
								toggleDisplayOptions(false);

								if (lang !== 'en' && lang !== 'es') {
									toggleUseTextRunes(false);
								}
							}}
							styles={{width: 160}}
						>
							{name}
						</AppButton>
					))}
				</Pressable>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	languagesSelector: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.8)',
	},
});
