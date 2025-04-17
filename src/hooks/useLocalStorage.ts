import { useState } from 'react';

export enum LOCAL_STORAGE_KEYS {
	SETTINGS = 'lone-companion:settings',
	LANGUAGE = 'lone-companion:language',
}

type UseLocalStorageReturn<T> = [ T, (data: T) => Promise<void> ];

export const useLocalStorage = <T>(key: LOCAL_STORAGE_KEYS, defaultValue: T): UseLocalStorageReturn<T> => {
	const [value, setValue] = useState(() => {
		try {
			const localStorageValue = localStorage.getItem(key);

			return localStorageValue !== null ? JSON.parse(localStorageValue) : defaultValue;
		} catch (error) {
			console.warn(`Failed to retrieve localStorage key "${key}`, error);
			return defaultValue;
		}
	});

	const saveData = (data: T) => {
		if (data === null || data === undefined) {
			localStorage.removeItem(key);
			return Promise.resolve();
		}
		try {
			const jsonData = JSON.stringify(data);

			localStorage.setItem(key, jsonData);
			setValue(data);
			return Promise.resolve();
		} catch (error) {
			console.error(`Error saving localStorage data. key: ${key} | value: ${data}`, error);
			return Promise.reject();
		};
	}

	return [value, saveData] as const;
};
