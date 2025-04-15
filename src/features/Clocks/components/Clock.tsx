import { Fragment, useContext, useEffect, useState } from 'react';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { AppButton } from '../../../components/AppButton';
import { Typography } from '../../../components/Typography';
import { Colors, Fonts, FontSize, ToastDuration } from '../../../config';
import { LanguagesContext } from '../../../contexts';
import { useNotification } from '../../../hooks';
import { segmentSizes } from './definitions';
import {
    ClockActionButtons,
    ClockContainer,
    ClockExpiredIcon,
    ClockMainWrapper,
    ClockMark,
    ClockSegment,
    ClockSegmentWrapper,
    ClockTitle,
} from './styled';
import { ClockProps, ClockSizes, ClockTimerProgress } from './types';

export const Clock = ({
    bgColor = Colors.gray4,
    count = 6,
    size = ClockSizes.Medium,
    timerColor = Colors.red4,
    title = 'Unnamed Clock',
}: ClockProps) => {
    const [timer, updateTimer] = useState(3);
    const [showControls, toggleShowControls] = useState(false);
    const [triggered, toggleTriggered] = useState(false);

    // TODO [04-Apr-25]: Extract logic to a ClocksController (Anna Branco)

    const { notify } = useNotification();
    const { getText } = useContext(LanguagesContext);

    useEffect(() => {
        if (timer === count && !triggered) {
            toggleTriggered(true);
            notify(
                {
                    notificationTitle: getText('Clock Alarm'),
                    message: {
                        text: `${title} ${getText('has been triggered!')}`,
                    },
                },
                {
                    backgroundColor: timerColor,
                    position: 'top-center',
                    duration: ToastDuration.Fixed,
                },
            );
        } else if (timer < count && triggered) {
            toggleTriggered(false);
        }
    }, [
timer, count, notify, getText, title, timerColor, triggered,
]);

    const progressTimer = (action: ClockTimerProgress) => {
        const modifier = action === ClockTimerProgress.Advance ? 1 : -1;
        const newTimerCount = timer + modifier;

        if (newTimerCount > count || newTimerCount < 0) {
            return;
        }
        updateTimer(newTimerCount);
    };

    const resetTimer = () => updateTimer(0);

    return (
        <ClockContainer size={size}>
            <ClockMainWrapper
                bgColor={bgColor}
                onMouseEnter={() => toggleShowControls(true)}
                onMouseLeave={() => toggleShowControls(false)}
                segmentSizes={segmentSizes[size]}
            >
                {[...Array(count).keys()].map((key) => {
                    const timerCount = key + 1;
                    const segmentSize = 360 / count;
                    const rotation = segmentSize * key;

                    return (
                        <Fragment key={`clock-segment-${key + 1}`}>
                            <ClockMark rotation={rotation} />

                            <ClockSegmentWrapper
                                rotation={rotation}
                                segmentSizes={segmentSizes[size]}
                            >
                                <ClockSegment
                                    rotation={timer >= timerCount ? segmentSize : 0}
                                    timerColor={timerColor}
                                    segmentSizes={segmentSizes[size]}
                                />
                            </ClockSegmentWrapper>
                        </Fragment>
                    );
                })}

                {showControls && !triggered && (
                    <ClockActionButtons>
                        <AppButton
                            onClick={() => progressTimer(ClockTimerProgress.Recede)}
                            styles={{ zIndex: 2, padding: '0 10px', width: '5rem' }}
                        >
                            {getText('Recede')}
                        </AppButton>
                        <AppButton
                            onClick={() => progressTimer(ClockTimerProgress.Advance)}
                            styles={{ zIndex: 2, padding: '0 10px', width: '5rem' }}
                        >
                            {getText('Advance')}
                        </AppButton>
                    </ClockActionButtons>
                )}

                {triggered && (
                    <ClockExpiredIcon
                        color="rgba(255, 255, 255, 0.58)"
                        icon={faCircleXmark}
                        size={size === ClockSizes.Small ? '2x' : '5x'}
                        name="ss"
                        onClick={resetTimer}
                        role="button"
                    />
                )}
            </ClockMainWrapper>

            <ClockTitle>
                {/* TODO: Edit name clicking on it. */}
                <Typography
                    as="h3"
                    styles={{
                        fontFamily: Fonts.Norse,
                        fontSize:
                            size === ClockSizes.Small ? FontSize.medium : FontSize.big,
                    }}
                >
                    {getText(title)}
                </Typography>
            </ClockTitle>
        </ClockContainer>
    );
};
