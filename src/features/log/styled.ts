import styled from '@emotion/styled';
import { AppButton } from '../../components/AppButton';
import { Colors, Fonts, FontSize } from '../../config';
import { css } from '@emotion/react';
import { Theme } from '../../types';
import { Typography } from '../../components/Typography';

export const LogContainer = styled.div`
        position: absolute;
        top: 0;
        right: 0;
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        background-color: ${Colors.gray1};
        border: 2px solid white;
`;

export const LogListWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin: 50px 20px;
        padding: 10px;
        border: 1px solid black;
        border-radius: 5px;
        box-shadow:inset 0 0 3px 1px rgba(0,0,0,0.45);
        width: 90%;
        height: 100%;
`;


export const LogList = styled.ul`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        list-style: none;
        gap: 20px;
`;

export const LogWrapper = styled.div<{ theme: Theme }>`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: auto;
        width: 22vw;
        border: 1px dotted ${Colors.blue3};
        border-radius: 5px;
        padding: 15px;
        background-color: ${Colors.gray0};

        ${({ theme }) => {
                if (theme === Theme.Dark) {
                        return css`
                                border-color: ${Colors.red7};
                		background-color: ${Colors.gray2};
                        `
                }
        }}
`;

export const TimeStamp = styled(Typography)`
        position: absolute;
        top: 5px;
        right: 20px;
        width: 120px;
        font-size: ${FontSize.small};
        text-align: right;
        color: ${Colors.green7};
`;

export const LogDeleteButton = styled(AppButton)`
        position: absolute;
        top: 5px;
        right: 5px;
        width: 120px;
        font-size: ${FontSize.medium};
        color: ${Colors.red5};
        margin: 0 auto;
        box-shadow: none;
        text-align: right;
        line-height: 0.2rem;
        font-weight: 900;
        text-transform: uppercase;
`;

export const LogHeader = styled(Typography)`
        position: absolute;
        top: 0px;
        left: 10px;
        font-size: ${FontSize.large};
        text-align: left;
        color: ${Colors.pink4};
        font-weight: bold;
        font-family: ${Fonts.AlumniSans};
`;

export const LogTitleWrapper = styled.div`
        width: 100%;
        border: 1px solid ${Colors.green6};
        border-radius: 5px;
        background-color: ${Colors.yellow1};
        padding: 2px 10px;
        margin: 20px auto 0;
`;

export const LogTitle = styled(Typography)`
        font-size: ${FontSize.medium};
        color: ${Colors.green6};
        font-weight: bold;
`;

export const LogImageWrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
`;

export const LogImage = styled.img`
        max-width: 200px;
`;

export const LogMessage = styled(Typography)`
        font-size: ${FontSize.medium};
        color: ${Colors.blue6};
`;

export const LogInfoWrapper = styled.div`
        margin-top: 15px;
        width: 100%;
        border: 1px solid ${Colors.yellow6};
        background-color: ${Colors.yellow2};
        padding: 8px;
`;

export const LogInfo = styled(Typography)`
        font-size: ${FontSize.medium};
        color: ${Colors.blue6};
        font-style: italic;
`;