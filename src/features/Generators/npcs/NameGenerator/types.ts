import { Ancestries } from '@/generators/npcs/data';
import { Genders } from '@/constants';

export interface NameProps {
	gender: Genders;
	ancestry: Ancestries;
}

export interface Name extends NameProps {
	firstName: string;
	lastName?: string;
	knownName: string;
}
