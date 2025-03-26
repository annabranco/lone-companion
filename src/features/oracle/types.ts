import {POSITIVE_LIKELY} from '../../hooks/useOracle/constants';

export interface OracleOptions {
	chance: POSITIVE_LIKELY;
	question?: string;
}

export interface OracleResult {
	question?: string;
	text: string;
	rune: string;
}

export interface OracleComponentProps {
	result?: OracleResult;
	rollOracle: (options?: OracleOptions) => void;
	showProbabilities: boolean;
	toggleOracle: () => void;
}
