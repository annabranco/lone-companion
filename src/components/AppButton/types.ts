import { CSSObject } from '@emotion/react';

import type { EventsProps } from '../../types';

export interface ButtonProps extends EventsProps {
    onClick: (event: React.MouseEvent) => void;
    styles?: CSSObject;
    kind?:  'primary' | 'secondary' | 'danger' | 'confirm' | 'ghost';
    glossy?: boolean;
};
