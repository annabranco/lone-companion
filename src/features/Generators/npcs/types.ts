import {Ancestries, Genders} from '../../../constants';
import {SupportedLanguages} from '../../../utils/i18n';
import {Age, Height, Weight} from './constants';

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
