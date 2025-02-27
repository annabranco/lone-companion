import { addDoc, collection, deleteDoc, doc, DocumentData, getDocs, getFirestore } from 'firebase/firestore';
import { auth, firebaseApp } from '../../config/firebase';
import { Log, LogMessageId, RawLog } from './types';
import { LogContext } from './LogContext';
import { PropsWithChildren, useCallback, useEffect, useState } from 'react';

const db = getFirestore(firebaseApp);
const logsCollection = collection(db, 'logs');

export const LogProvider = ({ children }: PropsWithChildren) => {
	const [logs, updateLogs] = useState<DocumentData[]>([]);

	const refreshData = useCallback(async () => {
		const logDBData = await getDocs(logsCollection);
		const updatedLogs = logDBData.docs.map(doc => {
			const { creator, content } = doc.data();

			return {
				creator,
				id: doc.id,
				...content,
			};
		});

		console.log(updatedLogs);
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
				const log: Log = {
					...data,
					timestamp,
				};

				const newLogObject = {
					content: log,
					creator: auth.currentUser?.uid || '',
				};

				await addDoc(logsCollection, newLogObject);
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
