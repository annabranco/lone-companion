import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Colors } from '../../config';
import { ButtonProps } from './types';

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
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 7px 15px;
  width: auto;
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.5);
  text-align: center;
  font-weight: normal;
  border-width: 1px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(0.985) translate(1px, 1px);
    filter: brightness(1.2);
  }

  ${({ kind }) => kind && ButtonKinds[kind]}
`;
