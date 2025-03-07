import { css, cx } from '@emotion/css';
import { toast, type ToastContentProps } from 'react-toastify';
import { Notification } from '../components/Notification';
import type {
    NotificationCustomOptions,
    NotificationData,
} from '../components/Notification/types';
import { Colors, defaultNotificationOptions } from '../config';

export const useNotification = () => {
    const notify = (
        data: NotificationData,
        customOptions: NotificationCustomOptions,
    ) => {
        const { backgroundColor, duration, ...moreOptions } = customOptions;

        const options = {
            ...defaultNotificationOptions,
            ...moreOptions,
            ...(duration === 0 ? { autoClose: false as const } : {}),
            ...(duration ? { autoClose: duration } : {}),
            className: cx(
                css`
          background-color: ${backgroundColor || Colors.gray1};
        `,
            ),
            data,
        };

        toast(
            (props: ToastContentProps<NotificationData>) => (
                <Notification {...props} />
            ),
            options,
        );
    };

    return {
        notify,
    };
};
