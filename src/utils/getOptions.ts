import {OptionWithWeight} from '../types';

export const getOptionsByWeight = <O>(options: OptionWithWeight<O>[]): O[] => {
	const optionsArray: O[] = [];

	options.forEach(({option, weight}) => {
		optionsArray.push(...Array.from({length: weight}, () => option));
	});

	return optionsArray;
};
