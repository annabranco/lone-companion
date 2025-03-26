import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { Typography } from '@/components/Typography';
import { Colors, Fonts, FontSize, zIndex } from '@/config';

export const NotificationArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

const HiddenButton = styled.button<{ visible: boolean }>`
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 350ms;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  cursor: pointer;

  &:hover {
    filter: brightness(1.25);
  }
`;

export const HidenCloseButton = styled(HiddenButton)`
  position: absolute;
  top: -8px;
  right: -6px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(63, 63, 70, 0.5);
  border: 1px solid rgb(161, 161, 170);
  box-shadow: 0 0 3px 1px rgba(255, 255, 255, 0.5);
  color: rgb(255, 255, 255);

  &::after {
    content: "✘";
    position: relative;
    top: -5px;
    right: 1px;
    font-size: 12px;
    color: white;
  }
`;

export const HidenLogButton = styled(HiddenButton) <{ text: string }>`
  z-index: ${zIndex.Middle};
  position: absolute;
  bottom: -8px;
  right: -6px;
  height: 20px;
  border-radius: 20px;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 350ms;
  background-color: ${Colors.blue4};
  border: 1px solid rgb(161, 161, 170);
  box-shadow: 0 0 3px 1px rgba(255, 255, 255, 0.5);
  color: rgb(255, 255, 255);
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  cursor: pointer;

  &::after {
    content: ${({ text }) => `"${text}"`};
    position: relative;
    bottom: 5px;
    right: 1px;
    padding: 0 5px;
    font-size: 12px;
    color: white;
  }
`;

export const NotificationTitle = styled(Typography) <{ withIcon: boolean }>`
  position: absolute;
  top: 0px;
  left: ${({ withIcon }) => (withIcon ? '40px' : '10px')};
  font-size: ${FontSize.medium};
  text-align: left;
  color: ${Colors.pink4};
  font-weight: bold;
  font-family: ${Fonts.AlumniSans};
`;

export const NotificationIcon = styled.img`
  position: absolute;
  top: -2px;
  left: -10%;
  height: 70px;
  width: 70px;
  border: 1px solid ${Colors.blue7};
  box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  margin: 0;
  background: red;
`;

export const NotificationText = styled(Typography)<{ withIcon: boolean }>`
  margin-top: 10px;
  margin-left: ${({ withIcon }) => (withIcon ? '20px' : '10px')};

  font-size: ${FontSize.big};
  color: ${Colors.black};
  font-weight: bold;
  font-family: ${Fonts.MedievalSharp};
`;

export const NotificationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const progressAnimation = keyframes`
    from {
        width: calc(100% + 1px);
    }
    to {
        width: 0%;
    }
`;

export const ProgressBar = styled.div<{ duration: number; isPaused: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  width: calc(100% + 1px);
  background-color: green;
  border-radius: 0 0 5px 5px;
  animation-name: ${progressAnimation};
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-duration: ${({ duration }) => `${duration}ms`};
  animation-play-state: ${({ isPaused }) => (isPaused ? 'paused' : 'running')};
`;

export const NpcNotificationWrapper = styled.div`
  margin-top: 5px;

  & > div > p:nth-of-type(2) {
    margin-left: 3rem;
  }
`;