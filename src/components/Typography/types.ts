import { CSSObject } from '@emotion/react';

import type { EventsProps } from '../../types';
import { Colors, Fonts, FontSize } from '../../config';

export interface TypographyProps extends EventsProps {
    as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    color?: Colors;
    fontFamily?: Fonts;
    size?: FontSize;
    styles?: CSSObject;
    id?: string;
}
