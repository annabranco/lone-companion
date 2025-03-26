import { useContext, useState } from 'react';

import { defaultNotificationOptions } from '@/config';
import { LanguagesContext } from '@/contexts';
import { NpcViewComponent } from '@/features/Generators/npcs/NpcGenerator/components/NpcViewComponent';
import { NpcCharacteristics } from '@/features/Generators/npcs/types';
import { GeneratedContentType } from '@/features/Generators/types';
import { useLog } from '@/hooks';

import {
    HidenCloseButton,
    HidenLogButton,
    NotificationArea,
    NotificationContent,
    NotificationIcon,
    NotificationText,
    NotificationTitle,
    NpcNotificationWrapper,
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

    const {
        content,
        header,
        icon,
        image,
        message,
        notificationTitle,
        title,
        type = GeneratedContentType.Text,
    } = data;

    const onBlurNotificationArea = () =>
        autoClose &&
        setTimeout(() => {
            toggleIsCloseVisible(false);
        }, autoClose);

    const logData = () => {
        log({
            type,
            ...(content ? { content } : {}),
            ...(header ? { header } : {}),
            ...(image ? { image } : {}),
            ...(message ? { message } : {}),
            ...(title ? { title } : {}),
        });
        closeToast();
    };

    const getContent = () => {
        if (type === GeneratedContentType.NPC) {
            return (
                <NpcNotificationWrapper>
                    <NpcViewComponent npc={content as NpcCharacteristics} />
                </NpcNotificationWrapper>
            );
        }
    }

    const handleClose = () => closeToast();

    return (
        <NotificationArea
            onMouseEnter={() => toggleIsCloseVisible(true)}
            onMouseLeave={onBlurNotificationArea}
        >
            <HidenCloseButton visible={isCloseVisible} onClick={closeToast} />

            <HidenLogButton
                onClick={logData}
                text={getText('Log')}
                visible={isCloseVisible}
            />

            {icon && <NotificationIcon src={icon} />}

            {notificationTitle && (
                <NotificationTitle as="h3" withIcon={!!icon}>
                    {notificationTitle}
                </NotificationTitle>
            )}

            {message && (
                <NotificationText as="p" withIcon={!!icon}>{message.text}</NotificationText>

            )}

            {content && (
                <NotificationContent>{getContent()}</NotificationContent>

            )}

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
