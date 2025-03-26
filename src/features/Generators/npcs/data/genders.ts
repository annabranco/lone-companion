import { Genders } from '@/constants';

export const PRONOUMS = {
	[Genders.Woman]: ['She', 'her'],
	[Genders.Man]: ['He', 'him'],
	[Genders.GNC]: ['They', 'their'],
};

export const GENDERS: Genders[] = [
    ...Array.from({length: 48}, () => Genders.Woman),
    ...Array.from({length: 48}, () => Genders.Man),
    ...Array.from({length: 4}, () => Genders.GNC),
];

export const YOUNG_GENDER = {
	[Genders.Woman]: 'girl',
	[Genders.Man]: 'boy',
	[Genders.GNC]: 'child',
};