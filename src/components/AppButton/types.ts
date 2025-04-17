import { CSSObject } from '@emotion/react';

import type { EventsProps } from '../../types';

export interface AppButtonProps extends EventsProps {
    onClick: (event: React.MouseEvent) => void;
    styles?: CSSObject;
    kind?:  'primary' | 'secondary' | 'danger' | 'confirm' | 'ghost';
    glossy?: boolean;
    text?: string;
};

export interface ButtonProps extends Omit<AppButtonProps, 'text' | 'styles'> {
    label: string | null;
};
