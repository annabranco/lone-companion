import styled from '@emotion/styled';

import { zIndex } from '../../config';

export const LanguageSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
`;

export const LanguageSelectorButtonsOverlay = styled.div`
  z-index: ${zIndex.Overlay};
  position: fixed;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const LanguagButtonsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
