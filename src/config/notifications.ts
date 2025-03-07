import type { ToastOptions } from 'react-toastify';

export enum ToastDuration {
	VeryShort = 2000,
	Short = 4000,
	Medium = 8000,
	Long = 16000,
	VeryLong = 32000,
    Fixed = 0,
}

export const defaultNotificationOptions: ToastOptions = {
    position: 'top-right',
    autoClose: ToastDuration.Long,
    closeButton: false,
    customProgressBar: true,
};
