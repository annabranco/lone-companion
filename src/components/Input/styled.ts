import styled from '@emotion/styled';

import { Typography } from '@/components/Typography';
import { Colors, Fonts, FontSize } from '@/config';

export const InputWrapper = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const InputElement = styled.input`
  min-width: 70%;
  background-color: ${Colors.white};
  border-radius: 5px;
  border-color: 1px solid ${Colors.blue1};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 15px 11px;
  min-width: 20rem;
  font-family: ${Fonts.MedievalSharp};
`;

export const InputPlaceholder = styled(Typography)`
  position: absolute;
  top: -13px;
  left: 15px;
  color: ${Colors.green1};
  font-family: ${Fonts.MedievalSharp};
  font-size: ${FontSize.small};
  letter-spacing: 2px;
`;
