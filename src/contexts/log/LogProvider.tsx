import { addDoc, collection, deleteDoc, doc, DocumentData, getDocs, getFirestore } from 'firebase/firestore';
import { PropsWithChildren, useCallback, useEffect, useState } from 'react';

import { auth, firebaseApp } from '@/config';

import { LogContext } from './LogContext';
import type { Log, LogMessageId, RawLog } from './';

const db = getFirestore(firebaseApp);
const logsCollection = collection(db, 'logs');

export const LogProvider = ({ children }: PropsWithChildren) => {
	const [logs, updateLogs] = useState<DocumentData[]>([]);

	const refreshData = useCallback(async () => {
		const logDBData = await getDocs(logsCollection);
		const updatedLogs = logDBData.docs.map(doc => {
			return {
				...doc.data(),
				id: doc.id,
			} as Log;
		});

		orderBy('newFirst', updatedLogs);
		updateLogs(updatedLogs);
	}, []);

	const deleteLog = useCallback(
		async (id: LogMessageId) => {
			if (id) {
				const logDoc = doc(db, `logs/${id}`);

				await deleteDoc(logDoc);
				refreshData();
			}
		},
		[refreshData],
	);

	const addLog = useCallback(
		async (data: RawLog): Promise<boolean> => {
			try {
				const timestamp = new Date().toISOString();
				const newLog = {
					...data,
					timestamp,
					creator: auth.currentUser?.uid || '',
				};

				await addDoc(logsCollection, newLog);
				await refreshData();

				return true;
			} catch (error) {
				console.error('Error trying to fetch log DB', error);
				return false;
			}
		},
		[refreshData],
	);

	const clearLogs = useCallback(async () => { }, []);

	useEffect(() => {
		refreshData();
	}, [refreshData]);


	return <LogContext.Provider value={{ addLog, clearLogs, deleteLog, logs }}>{children}</LogContext.Provider>;
};

const orderBy = (type: 'newFirst' | 'oldFirst', logArray: Log[]) => {
	const byCreationDate = (a: Log, b: Log) => {
		if (a.timestamp < b.timestamp) {
			return type === 'newFirst' ? 1 : -1;
		}
		if (a.timestamp > b.timestamp) {
			return type === 'newFirst' ? -1 : 1;
		}
		return 0;
	}

	return logArray.sort(byCreationDate);
};
