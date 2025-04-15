import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { AppButton } from '../../components/AppButton';
import { Typography } from '../../components/Typography';
import { Colors, zIndex } from '../../config';

export const SettingsButton = styled(AppButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SettingsOverlay = styled.div`
  z-index: ${zIndex.Overlay};
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SettingsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const MainSettingsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 20px 0;
  width: 60%;
`;

export const ThemeWrappper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 20px 0;
  width: 60%;
`;

export const ToggleTexts = styled(Typography) <{ disabled?: boolean }>`
  margin-left: 20px;
  color: ${Colors.gray1};

  ${({ disabled }) =>
        disabled &&
        css`
      color: ${Colors.gray3};
    `}
`;

export const BackButton = styled(AppButton)`
  position: absolute;
  bottom: 0;
  height: 3rem;
  width: 60%;
  margin: 50px;
  text-transform: uppercase;
`;
