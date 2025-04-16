import type {
    ToastOptions,
    ToastPosition,
} from 'react-toastify';

import { ToastDuration } from '../../config';

import type { NpcCharacteristics } from '../../features/Generators/npcs';
import type {
    GeneratedContentType,
    GeneratedImage,
    GeneratedText,
    GeneratedTextExtended,
} from '../../features/Generators';

export interface NotificationCustomOptions {
    backgroundColor?: string;
    duration?: ToastDuration;
    position: ToastPosition;
}

export type NotificationOptions = NotificationCustomOptions & ToastOptions;

export interface NotificationData {
    component?: React.FC;
    content?: NpcCharacteristics;
    header?: GeneratedText;
	image?: GeneratedImage;
    icon?: string;
    message?: GeneratedTextExtended;
    notificationTitle: string;
    title?: GeneratedTextExtended;
    type?: GeneratedContentType;
}