import { LogDisplay } from '../../features/Log';
import { Generators } from '../../features/Generators';
import { Settings } from '../../features/Settings';
import { MainApplicationWrapper } from './styled';

export const Main = () => (
	<MainApplicationWrapper>
		<Generators />
		<LogDisplay />
		<Settings />
	</MainApplicationWrapper>
);
