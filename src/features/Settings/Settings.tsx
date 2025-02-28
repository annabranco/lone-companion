import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import { LanguageHandler } from '../LanguageSelector/LanguageSelector';
import { Modal, Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { LanguagesContext } from '../../contexts/languages/LanguagesContext';
import { Colors, overlayBackground } from '../../config';
import { SettingsContext } from '../../contexts/settings/SettingsContext';
import { ThemeText } from '../../components/Typography';
import { Theme } from '../../types';

export const Settings = () => {
	const { getText, language } = useContext(LanguagesContext);
	const { useTextRunes, toggleUseTextRunes, theme, toggleDarkMode } = useContext(SettingsContext);
	const [displaySettings, toggleDisplaySettings] = useState(false);

	return (
		<>
			{displaySettings ? (
				<Modal animationType='slide' transparent={false} visible={displaySettings}>
					<Pressable
						onPressOut={() => toggleDisplaySettings(false)}
						style={{ ...overlayBackground[theme], ...styles.settingsOverlay }}
					>
						<LanguageHandler />
						<View style={styles.oracleSwitchWrapper}>
							<Switch
								trackColor={{ false: Colors.gray2, true: Colors.blue3 }}
								thumbColor={useTextRunes ? Colors.white : Colors.gray1}
								ios_backgroundColor='#3e3e3e'
								onValueChange={toggleUseTextRunes}
								value={useTextRunes}
								disabled={language !== 'en' && language !== 'es'}
							/>
							<ThemeText style={language !== 'en' && language !== 'es' ? styles.switchTextDisabled : styles.switchText}>
								{getText('Display oracle runes result as text')}
							</ThemeText>
						</View>
						<View style={styles.theme}>
							<Switch
								trackColor={{ false: Colors.gray2, true: Colors.blue3 }}
								thumbColor={useTextRunes ? Colors.white : Colors.gray1}
								ios_backgroundColor='#3e3e3e'
								onValueChange={toggleDarkMode}
								value={theme === 'dark'}
							/>
							<ThemeText style={styles.switchText}>{getText('Dark mode')}</ThemeText>
						</View>
					</Pressable>
				</Modal>
			) : (
				<Pressable onPress={() => toggleDisplaySettings(true)} style={styles.settingsButton}>
					<FontAwesomeIcon color={theme === Theme.Light ? Colors.blue5 : Colors.gray3} icon={faGear} size={28} />
				</Pressable>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	settingsButton: {
		position: 'absolute',
		bottom: '5%',
		right: '5%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	settingsOverlay: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
	},
	oracleSwitchWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 20,
		width: '60%',
	},
	switchText: {
		marginLeft: 20,
	},
	switchTextDisabled: {
		marginLeft: 20,
		color: Colors.gray3,
	},
	theme: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 20,
		width: '60%',
	},
});
