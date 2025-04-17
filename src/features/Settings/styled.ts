import styled from '@emotion/styled';

import { AppButton } from '../../components/AppButton';
import { zIndex } from '../../config';

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
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 20px 0;
  width: 60%;
  gap: 1rem;
`;

export const BackButton = styled(AppButton)`
  position: absolute;
  bottom: 0;
  height: 3rem;
  width: 60%;
  margin: 50px;
  text-transform: uppercase;
`;

export const OptionGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;
