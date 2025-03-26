import type { OptionWithMultiplier, OptionWithWeight } from '@/types';
import { getOptionsByWeight } from '@/utils';

import { ORACLE_RESULT, POSITIVE_LIKELY } from './';

const createOracleOptions = (
	options: OptionWithMultiplier<ORACLE_RESULT>[],
	positiveLikely = POSITIVE_LIKELY.MAYBE,
): OptionWithWeight<ORACLE_RESULT>[] => {
	const positiveMultiplier = positiveLikely / 5;
	const negativeMultiplier = 20 - positiveMultiplier;

	return options.map(({option, multiplier}) => ({
		option: option,
		weight: (option.includes('No') ? negativeMultiplier : positiveMultiplier) * multiplier,
	}));
};

export const getOracleOptionsByWeight = (
	optionsArray: OptionWithMultiplier<ORACLE_RESULT>[],
	chance: POSITIVE_LIKELY,
): ORACLE_RESULT[] => {
	const optionsWithMultipliers = createOracleOptions(optionsArray, chance);

	return getOptionsByWeight(optionsWithMultipliers);
};
