
import { NpcCharacteristics } from '../../features/Generators/npcs';
import type { GeneratedTextExtended, GeneratedContentType, GeneratedText, GeneratedImage } from '../../features/Generators';

export interface RawLog {
	content?: NpcCharacteristics;
	header?: GeneratedText;
	image?: GeneratedImage;
	info?: GeneratedTextExtended;
	message?: GeneratedTextExtended;
	title?: GeneratedTextExtended;
	type: GeneratedContentType
}

export interface Log extends RawLog {
	creator: string;
	id: string;
	timestamp: string;
}