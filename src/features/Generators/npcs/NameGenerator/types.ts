import { Genders } from '../../../../constants';
import { Ancestries } from '../data';

export interface NameProps {
	gender: Genders;
	ancestry: Ancestries;
}

export interface Name extends NameProps {
	firstName: string;
	lastName?: string;
	knownName: string;
}
