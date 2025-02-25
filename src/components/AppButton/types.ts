import { CSSObject } from '@emotion/react';

export interface ButtonProps {
    onClick: (event: React.MouseEvent) => void;
    styles?: CSSObject;
    kind?:  'primary' | 'secondary' | 'danger' | 'confirm' | 'ghost';
};
