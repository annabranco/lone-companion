import styled from '@emotion/styled';
import { BackgroundColor } from '../../config';
import { PropsWithChildren, useContext } from 'react';
import { SettingsContext } from '../../contexts';
import { Theme } from '../../types';

export const Container = ({ children, ...props }: PropsWithChildren) => {
	const { theme } = useContext(SettingsContext);

	return (
		<AppContainer theme={theme} {...props}>
			{children}
		</AppContainer>);
};

const AppContainer = styled.div`
  ${({ theme }: { theme: Theme }) => BackgroundColor[theme]}
`;
