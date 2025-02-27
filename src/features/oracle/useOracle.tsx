import { useContext, useState } from 'react';
import { Colors, FontSize } from '../../config';
import { diceSound } from '../../assets/sounds';
import { LanguagesContext, SettingsContext } from '../../contexts';
import { useLog, useSound } from '../../hooks';
import { DIE, roll } from '../roll';
import { OracleComponent } from './OracleComponent';
import { getOracleOptionsByWeight } from './oracleUtils';
import { defaultOracleOptions, ORACLE_ANSWERS_WITH_MULTIPLIERS, ORACLE_RESULT, ORACLE_RUNES, POSITIVE_LIKELY } from './constants';
import { OracleComponentProps, OracleOptions, OracleResult } from './types';
// import { Colors, FontSize } from '../../config';

export interface UseOracleReturn {
	component: React.FC<OracleComponentProps>;
	oracleResult?: OracleResult;
	rollOracle: (options?: OracleOptions) => void;
	showProbabilities: boolean;
	toggleOracle: () => void;
}

export const useOracle = (): UseOracleReturn => {
	const [oracleResult, setOracleResult] = useState<OracleResult>();
	const [showProbabilities, toggleProbabilities] = useState(false);
	const { getText, language } = useContext(LanguagesContext);
	const { useTextRunes } = useContext(SettingsContext);

	const { log } = useLog();
	const { play } = useSound(diceSound);

	const rollOracle = (options?: OracleOptions) => {
		const { chance = POSITIVE_LIKELY.MAYBE, question } = options || defaultOracleOptions;
		const answers = getOracleOptionsByWeight(ORACLE_ANSWERS_WITH_MULTIPLIERS, chance);

		const rollResult = roll(DIE.d100);
		const oracleRoll: ORACLE_RESULT = answers[rollResult];
		let oracleRunesLanguage: 'en' | 'es' | 'futhark' = 'futhark';

		if ((language === 'en' || language === 'es') && useTextRunes) {
			oracleRunesLanguage = language;
		}

		const result = {
			question,
			text: getText(oracleRoll),
			rune: ORACLE_RUNES[oracleRunesLanguage][oracleRoll],
		};

		setOracleResult(result);

		toggleProbabilities(false);

		log({
			header: {text: `${getText('Oracle')}`},
			...(question ? {title: {text: question, size: FontSize.small, color: Colors.blue5}} : {}),
			message: {text: getText(oracleRoll), style: 'italic', align: 'center', size: FontSize.medium},
			image: {
				source: ORACLE_RUNES[oracleRunesLanguage][oracleRoll],
				width: 120,
			},
		});


		setTimeout(() => {
			play();
		}, 100);

		setTimeout(() => {
			setOracleResult(undefined);
		}, 8000);
	};

	const toggleOracle = () => {
		toggleProbabilities(!showProbabilities);
	};

	return {
		component: OracleComponent,
		oracleResult,
		rollOracle,
		showProbabilities,
		toggleOracle,
	};
};
