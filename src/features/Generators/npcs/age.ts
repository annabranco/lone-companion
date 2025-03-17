import {Age} from './constants';

export const AGES_LIST = [
	Age.Child,
	Age.Teenager,
	Age.YoungAdult,
	Age.Around30s,
	Age.MiddleAged,
	Age.Around60s,
	Age.Old,
	Age.VeryOld,
];

export const AGE_GROUP = [
	...Array.from({length: 1}, () => Age.Child),
	...Array.from({length: 3}, () => Age.Teenager),
	...Array.from({length: 10}, () => Age.YoungAdult),
	...Array.from({length: 10}, () => Age.Around30s),
	...Array.from({length: 7}, () => Age.MiddleAged),
	...Array.from({length: 4}, () => Age.Around60s),
	...Array.from({length: 3}, () => Age.Old),
	...Array.from({length: 1}, () => Age.VeryOld),
];
