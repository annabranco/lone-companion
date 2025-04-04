import { ClockSizes } from './types';

export const segmentSizes = {
    [ClockSizes.Small]: {
        wrapper: '68px',
        size: '60px',
        segmentWrapperClip: 'rect(0px, 60px, 30px, 30px)',
        segmentClip: 'rect(0px, 30px, 30px, 0px)',
    },
    [ClockSizes.Medium]: {
        wrapper: '130px',
        size: '120px',
        segmentWrapperClip: 'rect(0px, 115px, 60px, 60px)',
        segmentClip: 'rect(0px, 60px, 60px, 0px)',
    },
    [ClockSizes.Big]: {
        wrapper: '212px',
        size: '200px',
        segmentWrapperClip: 'rect(0px, 200px, 200px, 100px)',
        segmentClip: 'rect(0px, 100px, 200px, 0px)',
    },
};