import { useContext, useState } from 'react';

import { Colors, FontSize } from '@/config';
import { LanguagesContext, SettingsContext } from '@/contexts';
import { GeneratedContentType } from '@/features/Generators/types';
import { OracleComponent } from '@/features/Oracle/OracleComponent';
import { OracleComponentProps, OracleOptions, OracleResult } from '@/features/Oracle/types';
import { useDice, useLog } from '@/hooks';
import { defaultOracleOptions, ORACLE_ANSWERS_WITH_MULTIPLIERS, ORACLE_RESULT, ORACLE_RUNES, POSITIVE_LIKELY } from '@/hooks/useOracle/constants';
import { getOracleOptionsByWeight } from '@/hooks/useOracle/functions';

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
	const { die, roll } = useDice();

	const { log } = useLog();

	const rollOracle = (options?: OracleOptions) => {
		const { chance = POSITIVE_LIKELY.MAYBE, question } = options || defaultOracleOptions;
		const answers = getOracleOptionsByWeight(ORACLE_ANSWERS_WITH_MULTIPLIERS, chance);

		const rollResult = roll(die.d100);
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
			type: GeneratedContentType.Oracle,
			header: {text: `${getText('Oracle')}`},
			...(question ? {title: {text: question, size: FontSize.small, color: Colors.blue5}} : {}),
			message: {text: getText(oracleRoll), style: 'italic', align: 'center', size: FontSize.medium},
			image: {
				source: ORACLE_RUNES[oracleRunesLanguage][oracleRoll],
				width: 120,
			},
		});

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
