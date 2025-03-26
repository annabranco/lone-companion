import type {
    ToastContentProps,
    ToastOptions,
    ToastPosition,
} from 'react-toastify';

import type { ToastDuration } from '@/config';
import { NpcCharacteristics } from '@/features/Generators/npcs/types';
import {
    GeneratedContentType,
    GeneratedImage,
    GeneratedText,
    GeneratedTextExtended,
} from '@/features/Generators/types';

export interface NotificationCustomOptions {
    backgroundColor?: string;
    duration?: ToastDuration;
    position: ToastPosition;
}

export type NotificationOptions = NotificationCustomOptions & ToastOptions;

export interface NotificationData {
    content?: NpcCharacteristics;
    header?: GeneratedText;
	image?: GeneratedImage;
    icon?: string;
    message?: GeneratedTextExtended;
    notificationTitle: string;
    title?: GeneratedTextExtended;
    type?: GeneratedContentType;
}

export type NotificationProps = ToastContentProps<NotificationData>;
