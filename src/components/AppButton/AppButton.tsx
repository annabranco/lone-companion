/** @jsxImportSource @emotion/react */
import { Button } from './styled';
import { ButtonProps } from './types';
import { PropsWithChildren } from 'react';

export const AppButton = ({ children, onClick, styles, kind = 'primary', ...props }: PropsWithChildren<ButtonProps>) => (
	<Button
		css={styles}
		kind={kind}
		onClick={onClick}
		type='button'
		{...props}
	>
		{children}
	</Button>
);


