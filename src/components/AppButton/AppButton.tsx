/** @jsxImportSource @emotion/react */
import { AppButtonAnimation, Button } from './styled';
import { ButtonProps } from './types';
import { PropsWithChildren } from 'react';

export const AppButton = ({ children, onClick, styles, kind = 'primary', glossy = false, ...props }: PropsWithChildren<ButtonProps>) => (
	<Button
		css={styles}
		glossy={glossy}
		kind={kind}
		onClick={onClick}
		type='button'
		{...props}
	>
		{glossy && <AppButtonAnimation />}
		{children}
	</Button>
);


