// import { Settings } from '../../features/settings';
import styled from '@emotion/styled';
import { Container } from '../Container';
import { LogDisplay } from '../../features/Log';
import { Generators } from '../../features/Generators';

export const Main = () => (
	<MainApplicationWrapper>
		<Generators />
		<LogDisplay />
	</MainApplicationWrapper>
);

const MainApplicationWrapper = styled(Container)`
 	height: 90%; 
  	width: 90%;
`;