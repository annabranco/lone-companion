import { Colors, FontSize } from '@/config';

export enum GeneratedContentType {
	NPC = 'npc',
	Oracle = 'oracle',
	Text = 'text',
}

export interface GeneratedText {
	text?: string;
	color?: Colors;
	size?: FontSize;
	weight?: 'bold' | 'normal';
	style?: 'italic';
}

export interface GeneratedTextExtended extends GeneratedText {
	align?: 'center' | 'left' | 'right';
	background?: Colors;
}

export interface GeneratedImage {
	source: string;
	width?: number;
	marginTop?: number;
	marginBottom?: number;
}