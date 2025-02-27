import {translations as basics} from './basics';
import {translations as generators} from './generators';
import {translations as nicknames} from './nicknames';
import {translations as npcCharacteristics} from './npcCharacteristics';
import {translations as oracle} from './oracle';
import {translations as settings} from './settings';

export const TRANSLATIONS = {
	...basics,
	...generators,
	...nicknames,
	...npcCharacteristics,
	...oracle,
	...settings,
};
