import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '../../components/Typography';
import { Colors, FontSize, GlobalStyles, zIndex } from '../../config';
import { Theme } from '../../types';

export const ConditionalWrapper = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

export const OracleOverlay = styled.div`
  z-index: ${zIndex.Front};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const PossibilityTitle = styled(Typography)`
  ${GlobalStyles.title}
  margin: 6rem auto 4rem;
  color: ${Colors.blue0};
`;

export const Possibilities = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const QuestionInput = styled.textarea`
  bottom: 10%;
  border-color: ${Colors.blue4};
  border-width: 1;
  width: 240;
  height: 80;
  background-color: ${Colors.gray0};
  font-size: ${FontSize.big};
`;

export const QuestionArea = styled.div`
  position: absolute;
  bottom: 10%;
`;

export const OracleResultImage = styled.img`
  background-color: ${({ theme }) =>
		theme === Theme.Dark ? 'rgba(255,255,255,0.4)' : 'transparent'};
  width: 40%;
  border-radius: 30;
`;

export const Question = styled(Typography)`
  ${GlobalStyles.title}
  color: ${Colors.yellow4};
  font-size: ${FontSize.xlarge};
`;

export const Results = styled(Typography)`
  ${GlobalStyles.comment}
  font-size: ${FontSize.xxxlarge};
  color: ${Colors.yellow5};
`;

export const oracleStyles = {
	possibilityButton: css`
    width: 170px;
    box-shadow: 0 2px 5px 2px rgba(255, 255, 255, 0.25);
  `,
	questionTitle: css`
    ${GlobalStyles.comment}
    color: ${Colors.black};
    font-size: ${FontSize.medium};
    padding: 5px 10px;
    background-color: ${Colors.gray1};
  `,
	oracleResult: css`
    position: absolute;
    align-items: center;
    justify-content: space-around;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px 0;
  `,
};
