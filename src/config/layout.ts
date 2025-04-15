import { css } from '@emotion/react';

import { Theme } from '../types';
import { Colors } from './colors';
import { Fonts, FontSize } from './fonts';

export const TextColor = {
	[Theme.Dark]: css`
    color: ${Colors.gray1};
  `,
	[Theme.Light]: css`
    color: ${Colors.red7};
  `,
};

export const BackgroundColor = {
	[Theme.Dark]: css`
    background-color: ${Colors.gray7};
  `,
	[Theme.Light]: css`
    background-color: ${Colors.gray0};
  `,
};

export const OverlayBackground = {
	[Theme.Dark]: css`
    background-color: rgba(0, 0, 0, 0.9);
  `,
	[Theme.Light]: css`
    background-color: rgba(0, 0, 0, 0.85);
  `,
};

export const GlobalStyles = {
	title: css`
    text-align: center;
    font-family: ${Fonts.Norse};
    font-weight: 700;
    font-size: ${FontSize.xlarge};
  `,
	button: css`
    font-family: ${Fonts.MedievalSharp};
    font-size: ${FontSize.big};
  `,
	text: css`
    font-family: ${Fonts.AlumniSans};
    font-weight: 200;
    font-size: ${FontSize.medium};
  `,
	comment: css`
    font-family: ${Fonts.Norse};
    font-size: ${FontSize.big};
  `,
};

export enum zIndex {
	Back = 1,
	Middle = 5,
	Front = 10,
	Overlay = 15,
	Top = 20,
}
