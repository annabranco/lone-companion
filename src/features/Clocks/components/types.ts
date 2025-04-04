import { Colors } from '@/config';

export enum ClockSizes {
    Small = '100px',
    Medium = '190px',
    Big = '300px',
}

export interface SegmentSizes {
    wrapper: string;
    size: string;
    segmentWrapperClip: string;
    segmentClip: string;
}

export interface ClockProps {
    bgColor: Colors;
    count: number;
    size: ClockSizes;
    timerColor: Colors;
    title: string;
}

export enum ClockTimerProgress {
    Advance,
    Recede,
}