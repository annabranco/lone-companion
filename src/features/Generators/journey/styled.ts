import styled from '@emotion/styled';

import { AppButton } from '../../../components/AppButton';
import { Typography } from '../../../components/Typography';
import { Colors, FontSize, zIndex } from '../../../config';


export const CustomSettlementForm = styled.form`
  z-index: ${zIndex.Front};
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  gap: 15px;
  background-color: rgba(0, 0, 0, 0.85);
`;

export const CustomSettlementOriginLabel = styled(Typography)`
  color: ${Colors.white};
  font-size: ${FontSize.big};
  margin-bottom: -1rem;
`;

export const FormOkButton = styled(AppButton)`
  margin-top: 4rem;
  font-size: ${FontSize.big};
`;

