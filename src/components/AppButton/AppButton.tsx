/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from 'react';
import { Button } from './styled';
import { ButtonProps } from './types';

export const AppButton = ({ children, onClick, styles, kind = 'primary' }: PropsWithChildren<ButtonProps>) => (
	<Button
		css={styles}
		kind={kind}
		onClick={onClick}
		type='button'
	>
		<p>{children}</p>
	</Button>
);


