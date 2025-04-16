/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IconComponentProps } from './types';
import { ORACLE_ICONS } from '../../../assets/oracle/icons';

export const IconComponent = ({ icon }: IconComponentProps) => {

    const iconId = icon as keyof typeof ORACLE_ICONS;

        const styles = css`
            border: 0; 
            vertical-align: middle;
        `;

        return (
            <img alt='' src={ORACLE_ICONS[iconId]} width="42" css={styles} />
        )
}