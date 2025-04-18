import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { ButtonProps } from '.';
import { Colors, Fonts, FontSize } from '../../config';
import { Typography } from '../Typography';

const ButtonKinds = {
  primary: css`
    border-color: ${Colors.blue5};
    background-color: ${Colors.blue4};
    color: ${Colors.white};
  `,
  secondary: css`
    border-color: ${Colors.gray5};
    background-color: ${Colors.gray2};
    color: ${Colors.black};
  `,
  danger: css`
    border-color: ${Colors.red5};
    background-color: ${Colors.red3};
    color: ${Colors.black};
  `,
  confirm: css`
    border-color: ${Colors.green5};
    background-color: ${Colors.green3};
    color: ${Colors.black};
  `,
  ghost: css`
    border-color: transparent;
    background-color: transparent;
    color: ${Colors.blue4};
    box-shadow: none;

    &:hover {
      transform: none;
      filter: brightness(1.6);
    }
  `,
};

export const Button = styled.button<ButtonProps>`
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 7px 10px;
  width: auto;
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.5);
  text-align: center;
  font-weight: normal;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.9);
  border-width: 1px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(0.985) translate(1px, 1px);
    filter: brightness(1.2);

    & > span {
      transform: translate(120%, 0);
      transition: 1s ease-in-out;
    }
  }

  ${({ kind }) => kind && ButtonKinds[kind]}

  ${({ glossy }) =>
    glossy &&
    css`
      border-radius: 15px;

      box-shadow: inset rgba(255, 254, 255, 0.45) 0 12px 10px,
        inset hsla(0, 0%, 0%, 0.5) 1px 1px 10px 2px,
        rgba(0, 0, 0, 0.45) 1px 3px 3px 1px;

      &:hover {
        box-shadow: inset rgba(255, 254, 255, 0.45) 0 8px 10px,
          inset hsla(0, 0%, 0%, 0.5) 1px 1px 10px 2px,
          rgba(0, 0, 0, 0.45) 1px 1px 3px 1px;
      }
    `}

    
  ${({ label }) =>
    label &&
    css`
      &:hover {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &::after {
          position: absolute;
          bottom: 0;
          content: "${label}";
          background: ${Colors.gray0};
          border: 2px solid ${Colors.blue3};
          padding: 3px 6px;
          color: ${Colors.blue6};
          font-family: ${Fonts.MedievalSharp};
          font-size: ${FontSize.small};
        }
      }
    `}
`;

export const AppButtonAnimation = styled.span`
  position: absolute;
  left: -20%;
  top: -50%;
  width: 100%;
  color: #fff;
  transition: 10ms ease-out;

  ::before {
    content: "|";
    position: absolute;
    left: 0;
    font-size: 10rem;
    filter: blur(15px);
  }
`;

export const AppButtonInnerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AppButtonDefaultIcon = styled.img`
  width: 3rem;
`;

export const AppButtonLabel = styled(Typography)`
  margin-top: 0.5rem;
  color: ${Colors.gray1};
  font-family: ${Fonts.MedievalSharp};
  size: ${FontSize.small};
`;
