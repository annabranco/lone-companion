import { Translations } from '../types';
import { translations as ancestries } from './ancestries';
import { translations as basics } from './basics';
import { translations as colors } from './colors';
import { translations as generators } from './generators';
import { translations as journey } from './journey';
import { translations as nicknames } from './nicknames';
import { translations as npcs } from './npcs';
import { translations as oracle } from './oracle';
import { translations as settings } from './settings';

export const TRANSLATIONS: Translations  = {
	...ancestries,
	...basics,
	...colors,
	...generators,
	...journey,
	...nicknames,
	...npcs,
	...oracle,
	...settings,
};
