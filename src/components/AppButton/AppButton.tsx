/** @jsxImportSource @emotion/react */
import { PropsWithChildren, useContext } from 'react';

import { Colors, Fonts, FontSize } from '../../config';
import { SettingsContext } from '../../contexts';
import {
	AppButtonAnimation,
	AppButtonLabel,
	Button,
	type AppButtonProps,
} from './';

export const AppButton = ({
	children,
	onClick,
	styles,
	kind = 'primary',
	glossy = false,
	text,
	...props
}: PropsWithChildren<AppButtonProps>) => {
	const { hideButtonsText, displayButtonsLabel } = useContext(SettingsContext);

	return (
		<Button
			css={styles}
			glossy={glossy}
			kind={kind}
			onClick={onClick}
			label={text && displayButtonsLabel ? text : null}
			type="button"
			{...props}
		>
			{glossy && <AppButtonAnimation />}

			{children}

			{text && !hideButtonsText && (
				<AppButtonLabel
					color={Colors.gray1}
					fontFamily={Fonts.MedievalSharp}
					size={FontSize.small}
				>
					{text}
				</AppButtonLabel>
			)}
		</Button>
	);
};
