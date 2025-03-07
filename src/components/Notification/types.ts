import type {
    ToastContentProps,
    ToastOptions,
    ToastPosition,
} from 'react-toastify';
import type { ToastDuration } from '../../config';

export interface NotificationCustomOptions {
    duration?: ToastDuration;
    backgroundColor?: string;
    position: ToastPosition;
}

export type NotificationOptions = NotificationCustomOptions & ToastOptions;

export interface NotificationData {
    title?: string;
    content: string;
    icon?: string;
}

export type NotificationProps = ToastContentProps<NotificationData>;
