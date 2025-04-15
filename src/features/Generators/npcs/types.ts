import { Genders } from '../../../constants';
import { SupportedLanguages } from '../../../i18n';

import { Age, Ancestries, Height, Weight } from './data';

export interface NpcCharacteristics {
	age: Age;
	ancestry: Ancestries;
	background: string;
	demeanor: string;
	eyes: string;
	facialHair: string;
	firstName: string;
	gender: Genders;
	goal: string;
	hair: string;
	height: Height;
	knownName: string;
	lastName: string;
	presentation: string;
	pronoum: string;
	quirks: string[];
	skin: string;
	weight: Weight;
}

export interface NpcGeneratorProps {
	age?: Age;
	ancestry?: Ancestries;
	background?: string;
	firstName?: string;
	gender?: Genders;
	lastName?: string;
	language: SupportedLanguages;
}

export interface NpcUpdates {
	age?: string;
	ancestry?: string;
	background?: string;
	demeanor?: string;
	hair?: string;
	height?: string;
	quirk?: string;
	weight?: string;
}
export interface Nicknames {
	[nickname: string]: NpcUpdates;
}
