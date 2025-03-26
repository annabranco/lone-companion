/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from 'react';

import { AppButtonAnimation, Button, type ButtonProps } from './';

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


