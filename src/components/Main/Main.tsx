import { Clocks } from '../../features/Clocks';
import { Generators } from '../../features/Generators';
// import { LogDisplay } from '../../features/Log';
import { Settings } from '../../features/Settings';
import { MainApplicationWrapper } from './styled';

export const Main = () => (
	<MainApplicationWrapper>
		<Generators />
		{/* <LogDisplay /> */}
		<Settings />
		<Clocks />
	</MainApplicationWrapper>
);
