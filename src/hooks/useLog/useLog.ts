import { useCallback, useContext } from 'react';

import { LogContext } from '@/contexts';
import type { Log, RawLog } from '.';

interface UseLogReturn {
	deleteAllLogs: () => void;
	deleteLog: (id: string) => void;
	log: (data: RawLog) => Promise<boolean>;
	logs: Log[];
}

export const useLog = (): UseLogReturn => {
	const context = useContext(LogContext);

	if (context === undefined) {
		throw new Error('useLog must be within LogProvider');
	}

	const { addLog, clearLogs, deleteLog, logs } = context;
	const returnLogs = logs as Log[];

	const removeLog = useCallback(
		(id: string) => {
			deleteLog(id);
		},
		[deleteLog],
	);

	const addNewlog = useCallback(
		async (data: RawLog) => await addLog(data), [addLog],
	);

	const deleteAllLogs = useCallback(() => {
		// TODO Toggle confirmation dialog
		clearLogs();
	}, []);

	return {
		deleteAllLogs,
		deleteLog: removeLog,
		log: addNewlog,
		logs: returnLogs,
	};
};
