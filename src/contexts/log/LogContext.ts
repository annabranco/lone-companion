import { createContext } from 'react';

import { LogContextInterface } from './types';

const defaultContext = {
	addLog: () => Promise.resolve(true),
	clearLogs: () => null,
	deleteLog: () => null,
	logs: [],
};

export const LogContext = createContext<LogContextInterface>(defaultContext);
