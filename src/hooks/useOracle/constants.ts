import oracleResultImageEnNoAnd from '@/assets/oracle/oracle_no-and-en.png';
import oracleResultImageEnNo from '@/assets/oracle/oracle_no-en.png';
import oracleResultImageEnNoBut from '@/assets/oracle/oracle_no-but-en.png';
import oracleResultImageEnYesBut from '@/assets/oracle/oracle_yes-but-en.png';
import oracleResultImageEnYes from '@/assets/oracle/oracle_yes-en.png';
import oracleResultImageEnYesAnd from '@/assets/oracle/oracle_yes-and-en.png';
import oracleResultImageEsNoAnd from '@/assets/oracle/oracle_no-and-es.png';
import oracleResultImageEsNo from '@/assets/oracle/oracle_no-es.png';
import oracleResultImageEsNoBut from '@/assets/oracle/oracle_no-but-es.png';
import oracleResultImageEsYesNut from '@/assets/oracle/oracle_yes-but-es.png';
import oracleResultImageEsYes from '@/assets/oracle/oracle_yes-es.png';
import oracleResultImageEsYesAnd from '@/assets/oracle/oracle_yes-and-es.png';
import oracleResultImageFutharkNoAnd from '@/assets/oracle/oracle_no-and.png';
import oracleResultImageFutharkNo from '@/assets/oracle/oracle_no.png';
import oracleResultImageFutharkNoBut from '@/assets/oracle/oracle_no-but.png';
import oracleResultImageFutharkYesBut from '@/assets/oracle/oracle_yes-but.png';
import oracleResultImageFutharkYes from '@/assets/oracle/oracle_yes.png';
import oracleResultImageFutharkYesAnd from '@/assets/oracle/oracle_yes-and.png';

import { OracleOptions } from '../../features/Oracle/types';

const TEXT_NO_AND = 'No, and...';
const TEXT_NO = 'No';
const TEXT_NO_BUT = 'No, but...';
const TEXT_YES_BUT = 'Yes, but...';
const TEXT_YES = 'Yes';
const TEXT_YES_AND = 'Yes, and...';

export enum POSITIVE_LIKELY {
	SMALL_CHANCE = 10,
	UNLIKELY = 25,
	MAYBE = 50,
	LIKELY = 75,
	ALMOST_CERTAIN = 90,
}

export enum ORACLE_RESULT {
	NO_AND = TEXT_NO_AND,
	NO = TEXT_NO,
	NO_BUT = TEXT_NO_BUT,
	YES_BUT = TEXT_YES_BUT,
	YES = TEXT_YES,
	YES_AND = TEXT_YES_AND,
}

export const ORACLE_ANSWERS_WITH_MULTIPLIERS = [
	{
		option: ORACLE_RESULT.NO_AND,
		multiplier: 1,
	},
	{
		option: ORACLE_RESULT.NO,
		multiplier: 3,
	},
	{
		option: ORACLE_RESULT.NO_BUT,
		multiplier: 1,
	},
	{
		option: ORACLE_RESULT.YES_BUT,
		multiplier: 1,
	},
	{
		option: ORACLE_RESULT.YES,
		multiplier: 3,
	},
	{
		option: ORACLE_RESULT.YES_AND,
		multiplier: 1,
	},
];

export const ORACLE_RUNES = {
	en: {
		[ORACLE_RESULT.NO_AND]: oracleResultImageEnNoAnd,
		[ORACLE_RESULT.NO]: oracleResultImageEnNo,
		[ORACLE_RESULT.NO_BUT]: oracleResultImageEnNoBut,
		[ORACLE_RESULT.YES_BUT]: oracleResultImageEnYesBut,
		[ORACLE_RESULT.YES]: oracleResultImageEnYes,
		[ORACLE_RESULT.YES_AND]: oracleResultImageEnYesAnd,
	},
	es: {
		[ORACLE_RESULT.NO_AND]: oracleResultImageEsNoAnd,
		[ORACLE_RESULT.NO]: oracleResultImageEsNo,
		[ORACLE_RESULT.NO_BUT]: oracleResultImageEsNoBut,
		[ORACLE_RESULT.YES_BUT]: oracleResultImageEsYesNut,
		[ORACLE_RESULT.YES]: oracleResultImageEsYes,
		[ORACLE_RESULT.YES_AND]: oracleResultImageEsYesAnd,
	},
	futhark: {
		[ORACLE_RESULT.NO_AND]: oracleResultImageFutharkNoAnd,
		[ORACLE_RESULT.NO]: oracleResultImageFutharkNo,
		[ORACLE_RESULT.NO_BUT]: oracleResultImageFutharkNoBut,
		[ORACLE_RESULT.YES_BUT]: oracleResultImageFutharkYesBut,
		[ORACLE_RESULT.YES]: oracleResultImageFutharkYes,
		[ORACLE_RESULT.YES_AND]: oracleResultImageFutharkYesAnd,
	},
};

export const defaultOracleOptions: OracleOptions = {
	chance: POSITIVE_LIKELY.MAYBE,
	question: '',
};
