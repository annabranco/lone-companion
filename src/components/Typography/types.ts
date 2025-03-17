import { CSSObject } from '@emotion/react';

import type { EventsProps } from '../../types';

export interface TypographyProps extends EventsProps {
    as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    styles?: CSSObject;
    id?: string;
}
