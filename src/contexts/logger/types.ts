import { ReactElement } from 'react';
import { DocumentData } from 'firebase/firestore';
import { Colors, FontSize } from '../../config';

export type LogMessageId = string;

export type LogState = Log[];

export interface LogText {
	text?: string;
	color?: Colors;
	size?: FontSize;
	weight?: 'bold' | 'normal';
	style?: 'italic';
}

export interface LogTextExtended extends LogText {
	align?: 'center' | 'left' | 'right';
	background?: Colors;
}

export interface LogContent extends LogTextExtended {
	content?: ReactElement;
}

interface LogImage {
	source: string;
	width?: number;
	marginTop?: number;
	marginBottom?: number;
}

export interface RawLog {
	header?: LogText;
	image?: LogImage;
	message: LogContent;
	title?: LogTextExtended;
	info?: LogTextExtended;
}

export interface Log extends RawLog {
	timestamp: string;
	creator: string;
	id: string;
}

export interface LogFromDB {
	content: Log;
	creator: string;
	id: string;
}

export interface LogContextInterface {
	addLog: (data: RawLog) => Promise<boolean>;
	clearLogs: () => void;
	deleteLog: (id: LogMessageId) => void;
	logs: DocumentData[];
}
