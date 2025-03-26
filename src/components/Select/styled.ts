import styled from '@emotion/styled';

import { AppButton } from '@/components/AppButton';
import { Typography } from '@/components/Typography';
import { Colors, Fonts, FontSize, zIndex } from '@/config';

export const SelectComponent = styled.div`
  z-index: ${zIndex.Top};
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  gap: 4rem;
`;

export const SelectElement = styled.select`
  font-size: ${FontSize.large};
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const SelectButton = styled(AppButton)`
  border: 2px dotted ${Colors.blue1};
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  min-width: 20rem;
`;

export const SelectButtonText = styled(Typography)`
  font-family: ${Fonts.MedievalSharp};
  font-size: ${FontSize.big};
`;

export const SelectConfirmButton = styled(AppButton)`
  z-index: ${zIndex.Top};
`;
