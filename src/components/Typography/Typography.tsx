/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PropsWithChildren, useContext } from 'react';

import { TextColor } from '../../config';
import { SettingsContext } from '../../contexts';

import type { TypographyProps } from '.';

export const Typography = ({ as = 'p', color, fontFamily, size, children, ...props }: PropsWithChildren<TypographyProps>) => (
	<TypographyElement as={as} color={color} fontFamily={fontFamily} size={size} {...props}>
		{children}
	</TypographyElement>);

const TypographyElement = ({ as, children, color, fontFamily, size, styles, ...props }: PropsWithChildren<TypographyProps>) => {
	const { theme } = useContext(SettingsContext);

	const applyColor = color && css`
		color: ${color}
	`;

	const applySize = color && css`
		font-size: ${size}
	`;

	const applyFontFamily = color && css`
		font-family: ${fontFamily}
	`;

	const appliedStyles = css`
		${TextColor[theme]}
		${styles}
		${applyColor} 
		${applySize} 
		${applyFontFamily} 
	`;

	if (as === 'p') {
		return <p css={appliedStyles} {...props}>{children}</p>;
	} else if (as === 'span') {
		return <span css={appliedStyles} {...props}>{children}</span>
	} else if (as === 'h1') {
		return <h1 css={appliedStyles} {...props}>{children}</h1>
	} else if (as === 'h2') {
		return <h2 css={appliedStyles} {...props}>{children}</h2>
	} else if (as === 'h3') {
		return <h3 css={appliedStyles} {...props}>{children}</h3>
	} else if (as === 'h4') {
		return <h4 css={appliedStyles} {...props}>{children}</h4>
	} else if (as === 'h5') {
		return <h5 css={appliedStyles} {...props}>{children}</h5>
	} else if (as === 'h6') {
		return <h6 css={appliedStyles} {...props}>{children}</h6>
	}
	return <p css={appliedStyles} {...props}>{children}</p>;
}