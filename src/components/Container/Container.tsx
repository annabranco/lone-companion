import styled from '@emotion/styled';
import { PropsWithChildren, useContext } from 'react';
import { BackgroundColor } from '../../config';
import { SettingsContext } from '../../contexts';
import { Theme } from '../../types';

export const Container = ({ children }: PropsWithChildren) => {
	const { theme } = useContext(SettingsContext);

	return (
		<AppContainer theme={theme}>
			{children}
		</AppContainer>);
};

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }: { theme: Theme }) => BackgroundColor[theme]}
`;
