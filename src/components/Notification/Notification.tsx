import { useContext, useState } from 'react';
import { defaultNotificationOptions } from '../../config';
import { LanguagesContext } from '../../contexts';
import { useLog } from '../../hooks';
import {
    HidenCloseButton,
    HidenLogButton,
    NotificationArea,
    NotificationContent,
    NotificationIcon,
    NotificationTitle,
    ProgressBar,
} from './styled';
import type { NotificationProps } from './types';

export const Notification = ({
    closeToast,
    data,
    isPaused,
    toastProps,
}: NotificationProps) => {
    const { getText } = useContext(LanguagesContext);
    const { log } = useLog();

    const [isCloseVisible, toggleIsCloseVisible] = useState(false);

    const autoClose =
        toastProps?.autoClose ?? defaultNotificationOptions.autoClose;

    const { title, content, icon } = data;

    const onBlurNotificationArea = () =>
        autoClose &&
        setTimeout(() => {
            toggleIsCloseVisible(false);
        }, autoClose);

    const logData = () => {
        log({
            header: { text: title },
            message: { text: content },
        });
        closeToast();
    };

    const handleClose = () => closeToast();

    return (
        <NotificationArea
            onMouseEnter={() => toggleIsCloseVisible(true)}
            onMouseLeave={onBlurNotificationArea}
        >
            <HidenCloseButton visible={isCloseVisible} onClick={closeToast} />

            <HidenLogButton
                onClick={logData}
                visible={isCloseVisible}
                text={getText('Log')}
            />

            {icon && <NotificationIcon src={icon} />}

            {title && (
                <NotificationTitle as="h3" withIcon={!!icon}>
                    {title}
                </NotificationTitle>
            )}

            <NotificationContent as="p">{content}</NotificationContent>

            {autoClose && (
                <ProgressBar
                    duration={autoClose}
                    isPaused={!!isPaused}
                    onAnimationEnd={handleClose}
                />
            )}
        </NotificationArea>
    );
};
