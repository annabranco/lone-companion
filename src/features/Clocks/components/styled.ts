import styled from '@emotion/styled';
import { Colors } from '../../../config';

import { ClockSizes, SegmentSizes } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ClockContainer = styled.div<{ size: ClockSizes }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};;
`;

export const ClockMainWrapper = styled.div<{ bgColor: Colors, segmentSizes: SegmentSizes  }>`
  position: relative;
  height: ${({ segmentSizes }) => segmentSizes.wrapper};
  width: ${({ segmentSizes }) => segmentSizes.wrapper};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid ${Colors.black};
  background-color: ${({ bgColor }) => bgColor };
`;

export const ClockSegmentWrapper = styled.div<{ rotation: number, segmentSizes: SegmentSizes }>`
  position: absolute;
  width: ${({ segmentSizes }) => segmentSizes.size};
  height: ${({ segmentSizes }) => segmentSizes.size};
  clip: rect(0px, 200px, 200px, 100px);
  clip: rect(0px, 110px, 60px, 60px);
  clip: ${({ segmentSizes }) => segmentSizes.segmentWrapperClip};
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
`;

export const ClockSegment = styled.div<{ timerColor: Colors; rotation: number, segmentSizes: SegmentSizes }>`
  position: absolute;
  width: ${({ segmentSizes }) => segmentSizes.size};
  height: ${({ segmentSizes }) => segmentSizes.size};
  clip: rect(0px, 100px, 200px, 0px);
  clip: rect(0px, 60px, 60px, 0px);
  /* clip: rect(0px, 100px, 200px, 0px); */
clip: ${({ segmentSizes }) => segmentSizes.segmentClip};
  border-radius: 50%;
  background: ${({ timerColor }) => timerColor};
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  transition: transform ease-out 1000ms;
`;

export const ClockMark = styled.div<{ rotation: number }>`
  position: absolute;
  z-index: 1;
  width: 2px;
  height: 100%;
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  background-color: ${Colors.black};
`;

export const ClockActionButtons = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export const ClockTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ClockExpiredIcon = styled(FontAwesomeIcon)`
  position: absolute;
  z-index: 2;
  cursor: pointer;
`;