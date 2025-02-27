import AlumniSans from './assets/fonts/AlumniSans.ttf';
import AlumniSansLight from './assets/fonts/AlumniSansLight.ttf';
import MedievalSharp from './assets/fonts/MedievalSharp.ttf';
import NorseBoldFont from './assets/fonts/NorseBold.otf';
import NorseFont from './assets/fonts/Norse.otf';
import { CSSObject } from '@emotion/react';

export const globalStylesDefinitions: CSSObject[] = [
  {
    '@font-face': {
      fontFamily: 'Norse',
      fontWeight: 400,
      src: `url(${NorseFont}) format("opentype")`,
    },
  }, {
    '@font-face': {
      fontFamily: 'Norse',
      fontWeight: 700,
      src: `url(${NorseBoldFont}) format("opentype")`,
    },
  }, {
    '@font-face': {
      fontFamily: 'AlumniSans',
      fontWeight: 200,
      src: `url(${AlumniSansLight}) format("truetype")`,
    },
  }, {
    '@font-face': {
      fontFamily: 'AlumniSans',
      fontWeight: 400,
      src: `url(${AlumniSans}) format("truetype")`,
    },
  }, {
    '@font-face': {
      fontFamily: 'MedievalSharp',
      src: `url(${MedievalSharp}) format("opentype")`,
    },
  }, {
    '#root': {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
  },
];
