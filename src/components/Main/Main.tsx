import { LogDisplay } from '@/features/Log';
import { Generators } from '@/features/Generators';
import { Settings } from '@/features/Settings';

import { MainApplicationWrapper } from './styled';
import { Clocks } from '@/features/Clocks';

export const Main = () => (
	<MainApplicationWrapper>
		<Generators />
		<LogDisplay />
		<Settings />
		<Clocks />
	</MainApplicationWrapper>
);
