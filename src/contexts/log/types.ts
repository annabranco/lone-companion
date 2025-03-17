import { DocumentData } from 'firebase/firestore';

import { NpcCharacteristics } from '../../features/Generators/npcs/types';
import { GeneratedTextExtended, GeneratedContentType, GeneratedText, GeneratedImage } from '../../features/Generators/types';

export type LogMessageId = string;

export type LogState = Log[];

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

export interface LogContextInterface {
	addLog: (data: RawLog) => Promise<boolean>;
	clearLogs: () => void;
	deleteLog: (id: LogMessageId) => void;
	logs: DocumentData[];
}
