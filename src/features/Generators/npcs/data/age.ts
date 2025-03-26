export enum Age {
	Around30s = 'Around 30s',
	Around60s = 'Around 60s',
	Child = 'Child',
	MiddleAged = 'Middle-aged',
	Old = 'Elderly',
	Teenager = 'Teenager',
	VeryOld = 'Very old',
	YoungAdult = 'Young Adult',
}

export const AGE_LIST = [
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
