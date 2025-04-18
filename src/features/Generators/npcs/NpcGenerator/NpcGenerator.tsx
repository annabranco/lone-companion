import { useContext, useMemo } from 'react';

import IconNpc from '../../../../assets/images/icons/icon-npc-random.jpg';
import { AppButton } from '../../../../components/AppButton';
import {
	AppButtonDefaultIcon,
	AppButtonInnerContent,
} from '../../../../components/AppButton/styled';
import { ToastDuration } from '../../../../config';
import { LanguagesContext } from '../../../../contexts';
import { useNotification } from '../../../../hooks';

import { GeneratedContentType } from '../../types';
import { generateNPC } from './functions';
export const NpcGenerator = () => {
	const { getText, language } = useContext(LanguagesContext);
	const { notify } = useNotification();

	const text = useMemo(() => getText('Random NPC'), [getText]);

	const getNPC = () => {
		const npc = generateNPC({ language });
		const title = getText('NPC');

		notify(
			{
				notificationTitle: title,
				header: {
					text: title,
				},
				content: npc,
				type: GeneratedContentType.NPC,
				icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5YnOFLOe6iGpQlVZvey8gnL7OkJj-4FXH1_7i07ChFnZ6YCVPeE-p4uR47MMbAfst_YjgjYii3P2hJjBonhzYucBwDmn2U1siTaX1psZ4GLIilqrv3Q-Ywx3o8VLu8H6HdrQqieB8hAe7/s1600/Character-eowyn.png',
			},
			{ position: 'top-center', duration: ToastDuration.Fixed },
		);
	};

	return (
		<>
			<AppButton glossy={true} onClick={getNPC} text={text}>
				<AppButtonInnerContent>
					<AppButtonDefaultIcon src={IconNpc} alt={text} />
				</AppButtonInnerContent>
			</AppButton>
		</>
	);
};
