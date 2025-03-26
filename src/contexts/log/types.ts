import type { RawLog } from '@/hooks';
import { DocumentData } from 'firebase/firestore';


export interface LogContextInterface {
	addLog: (data: RawLog) => Promise<boolean>;
	clearLogs: () => void;
	deleteLog: (id: string) => void;
	logs: DocumentData[];
}
