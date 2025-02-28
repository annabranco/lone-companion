import {Ancestries, Genders} from '../../../constants';

export interface NameProps {
	gender: Genders;
	ancestry: Ancestries;
}

export interface Name extends NameProps {
	firstName: string;
	lastName?: string;
	knownName: string;
}
