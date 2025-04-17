import { useContext, useMemo } from 'react';

import IconName from '../../../../assets/images/icons/icon-name.png';
import {
	AppButton,
	AppButtonDefaultIcon,
	AppButtonInnerContent,
} from '../../../../components/AppButton';
import { ToastDuration } from '../../../../config';
import { LanguagesContext } from '../../../../contexts';
import { useNotification } from '../../../../hooks';

import { getName } from './functions';

export const NameGenerator = () => {
	const { getText, language } = useContext(LanguagesContext);
	const { notify } = useNotification();

	const text = useMemo(() => getText('Random Name'), [getText]);

	const generateRandomName = () => {
		const name = getName({ language });
		const title = getText('NPC Name');

		notify(
			{
				notificationTitle: title,
				header: { text: title },
				message: { text: name.knownName },
				icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5YnOFLOe6iGpQlVZvey8gnL7OkJj-4FXH1_7i07ChFnZ6YCVPeE-p4uR47MMbAfst_YjgjYii3P2hJjBonhzYucBwDmn2U1siTaX1psZ4GLIilqrv3Q-Ywx3o8VLu8H6HdrQqieB8hAe7/s1600/Character-eowyn.png',
			},
			{ position: 'top-center', duration: ToastDuration.Fixed },
		);
	};

	return (
		<AppButton glossy={true} onClick={generateRandomName} text={text}>
			<AppButtonInnerContent>
				<AppButtonDefaultIcon src={IconName} alt={text} />
			</AppButtonInnerContent>
		</AppButton>
	);
};
