import { useContext, useState } from 'react';

import OracleIconsIcon from '../../../assets/oracle/icons/icons-macro.png';
import { AppButton, AppButtonDefaultIcon, AppButtonInnerContent } from '../../../components/AppButton';
import { Typography } from '../../../components/Typography';
import { Colors, ToastDuration } from '../../../config';
import { LanguagesContext } from '../../../contexts';
import { useNotification } from '../../../hooks';
import { rand } from '../../../utils';
import { IconComponent } from './IconComponent';
import { OracleIconProps } from './types';
import { OracleIconsWrapper } from './styled';


const TOTAL_ICONS = 400;
const DEFAULT_NUM_OF_ICONS = 4;

export const OracleIcons = ({num = DEFAULT_NUM_OF_ICONS}: OracleIconProps) => {

	const [selectedIcons, setSelectedIcons] = useState<number[]>([]);

	const { getText } = useContext(LanguagesContext);
	const { notify } = useNotification();


	const getNewIcon = () => {
		const newIconId = rand(TOTAL_ICONS);

		if (selectedIcons.includes(newIconId)) {
			return getNewIcon();
		} else {
			setSelectedIcons( [...selectedIcons, newIconId] );

			return newIconId;
		}
	};

	const getOracleIcons = () => {
		const icons = Array(num).fill('').map(() => getNewIcon());

		return () => (
			<OracleIconsWrapper>
			{icons.map((icon) => (
				<IconComponent key={icon} icon={icon} />
			))}
			</OracleIconsWrapper>
		)
	};

	const generateOracleIcons = () => {
		const result = getOracleIcons();
		const title = getText('The Oracle shows these images');

		notify(
			{
				notificationTitle: title,
				header: { text: title },
				component: result,
			},
			{ position: 'top-center', duration: ToastDuration.Fixed },
		);
	};

	return (
		<AppButton glossy={true} onClick={generateOracleIcons}>
			<AppButtonInnerContent>
					<AppButtonDefaultIcon src={OracleIconsIcon} alt={getText('Oracle Images')} />
			<Typography styles={{ color: Colors.white }}>
				{getText('Oracle Images')}
			</Typography>
			</AppButtonInnerContent>
		</AppButton>
	);
};