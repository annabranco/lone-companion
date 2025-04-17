import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { ToggleStyles } from '.';
import { Colors } from '../../config';
import { Typography } from '../Typography';

export const ToggleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ToggleElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ToggleInputController = styled.input`
  display: none;
`;

export const ToggleDisplay = styled.label<ToggleStyles>`
  display: block;
  width: 60px;
  height: 30px;
  background-color: ${Colors.gray2};
  border-radius: 99px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: inset 1px 1px 5px 1px rgba(0, 0, 0, 0.15);
  border: 3px solid ${Colors.gray3};

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    transition: left 0.3s ease;
    box-shadow: 2px 0 3px 1px rgba(0, 0, 0, 0.25);

    ${({ isOn, buttonColor }) => {
    if (buttonColor) {
      return css`
          background-color: ${buttonColor[isOn ? 'on' : 'off']};
        `;
    }
    return css`
        background-color: ${Colors.white};
        border: 1px solid black;
      `;
  }};

    ${({ isOn }) =>
    isOn &&
    css`
        left: 32px;
        box-shadow: -2px 0 3px 1px rgba(0, 0, 0, 0.25);
      `}
  }

  ${({ isOn, backgroundColor }) => {
    if (backgroundColor) {
      return css`
        background-color: ${backgroundColor[isOn ? 'on' : 'off']};
      `;
    }
    return css`
      background-color: ${isOn ? Colors.white : Colors.gray2};
    `;
  }};
`;

export const ToggleLabel = styled(Typography) <{ disabled?: boolean }>`
  margin-left: 20px;
  color: ${Colors.gray1};

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${Colors.gray3};
    `}
`;
