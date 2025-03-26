import styled from '@emotion/styled';
import { PropsWithChildren, useContext } from 'react';

import { BackgroundColor } from '@/config';
import { SettingsContext } from '@/contexts';
import { Theme } from '@/types';

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
