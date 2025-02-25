import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Colors } from '../../config';
import { ButtonProps } from './types';


const ButtonKinds = {
	primary: css({
		borderColor: Colors.blue5,
		backgroundColor: Colors.blue4,
		color: Colors.white,
	}),
	secondary: css({
		borderColor: Colors.gray5,
		backgroundColor: Colors.gray2,
		color: Colors.black,
	}),
	danger: css({
		borderColor: Colors.red5,
		backgroundColor: Colors.red3,
		color: Colors.black,
	}),
	confirm: css({
		borderColor: Colors.green5,
		backgroundColor: Colors.green3,
		color: Colors.black,
	}),
	ghost: css({
		borderColor: 'transparent',
		backgroundColor: 'transparent',
		color: Colors.blue4,
		shadowColor: 'none',
	}),
};

export const Button = styled.button<ButtonProps>`
	align-items: center;
	justify-content: center;
	border-radius: 3px;
	padding: 7px 15px;
	width: auto;
	box-shadow: 0 2px 1px rgba(0, 0, 0, 0.5);
	text-align: center;
	font-weight: normal;
	border-width: 1px;
	margin: 10px;

	${({ kind }) => kind && ButtonKinds[kind]}

	&:hover {
	transform: scale(0.985);
	opacity: 0.75;
	}
`;