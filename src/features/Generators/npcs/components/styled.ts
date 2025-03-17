import styled from '@emotion/styled';

import { AppButton } from '../../../../components/AppButton';
import { Typography } from '../../../../components/Typography';
import { Colors, Fonts, FontSize, zIndex } from '../../../../config';

export const NpcWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
`;

export const NpcnameWrapper = styled.div`
  border-bottom: 1px solid ${Colors.red6};
  width: 100%;
`;

export const NpcName = styled(Typography)`
  margin-bottom: 0;
  font-family: ${Fonts.MedievalSharp};
  font-size: ${FontSize.large};
  color: ${Colors.red6};
  text-align: center;
  font-weight: bold;
`;

export const NpcBackground = styled(Typography)`
  margin-bottom: 5px;
  font-family: ${Fonts.MedievalSharp};
  font-size: ${FontSize.big};
  font-style: italic;
  font-weight: 600;
  text-align: center;
`;

export const NpcSection = styled.div`
  margin-top: 15px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const NpcPresentation = styled(Typography)`
  font-size: ${FontSize.medium};
  font-style: italic;
`;

export const NpcSectionTitle = styled(Typography)`
  margin: 5px auto 0;
  font-weight: 600;
  color: ${Colors.blue5};
  font-size: ${FontSize.medium};
  font-family: ${Fonts.NorseBold};
`;

export const NpcGoalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin-bottom: 10px;
  padding: 10px;
  background-color: ${Colors.gray0};
  border-radius: 5px;
`;

export const NpcGoal = styled(Typography)`
  margin: 5px;
  font-size: ${FontSize.medium};
  text-align: center;
  font-weight: 600;
  color: ${Colors.blue6};
`;

export const NpcGoalButton = styled(AppButton)`
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 50%;
  border: 2px dotted ${Colors.gray1};
  border-radius: 5px;
  color: ${Colors.black};
  font-family: ${Fonts.Norse};
  font-size: ${FontSize.big};
  font-weight: 600;

  &:hover {
    background-color: ${Colors.yellow2};
  }
`;

export const NpcInnerSection = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid black;
  padding: 10px;
  background-color: ${Colors.gray0};
  border-radius: 5px;
  gap: 10px;
`;

export const NpcInneritem = styled.li`
  list-style-position: inside;
  background-color: ${Colors.blue0};
  width: 100%;
  padding: 5px 5px;
  border-radius: 8px;

  &::marker {
    color: ${Colors.red5};
    margin-right: 1px;
  }
`;

export const CustomNpcForm = styled.form`
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

export const GenerateNpcButton = styled(AppButton)`
  margin-top: 4rem;
  font-size: ${FontSize.big};
`;
