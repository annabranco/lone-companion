// import { Settings } from '../../features/settings';
import styled from '@emotion/styled';
import { Container } from '../Container';
import { LogDisplay } from '../../features/log';
import { Oracles } from '../../features/Oracles/Oracles';

export const Main = () => (
	<MainApplicationWrapper>
		<Oracles />
		<LogDisplay />
	</MainApplicationWrapper>
);

const MainApplicationWrapper = styled(Container)`
 	height: 90%; 
  	width: 90%;
`;