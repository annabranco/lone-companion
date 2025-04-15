/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { Typography } from '../../components/Typography';
import { BackgroundColor } from '../../config';
import { LanguagesContext, SettingsContext } from '../../contexts';
import { useLog } from '../../hooks';

import { LogComponent } from './LogComponent';
import { LogContainer, LogList, LogListWrapper } from './styled';

export const LogDisplay = () => {
	const { logs } = useLog();

	console.log('>>>>>>> logs', logs);

	const { theme } = useContext(SettingsContext);
	const { getText } = useContext(LanguagesContext);

	return (
		<LogContainer>
			<LogListWrapper css={BackgroundColor[theme]}>
				{/* <button
						title='Add to Log'
						onClick={() =>
							log({
								message: { text: 'Message Title', color: Colors.red5, size: FontSize.medium },
								title: { text: 'Message logged', color: Colors.green4, size: FontSize.large },
								info: { text: 'Information', background: Colors.pink2 },
							})
						}
					/> */}
				{/* <AppButton onClick={() => toggleDisplayLogs(false)}>{getText('Back')}</AppButton> */}

				<LogList>
					{logs.length ? (
						logs.map((item) => (
							<li key={item.id}>
								<LogComponent {...item} />
							</li>
						))
					) : (
						<Typography>{getText('Your log is empty')}</Typography>
					)}
				</LogList>
			</LogListWrapper>

			{/* <AppButton onClick={() => toggleDisplayLogs(true)}>{getText('Show Log')}</AppButton>

			<AppButton onClick={removeAllLogs}>{getText('Delete All Logs')}</AppButton> */}
		</LogContainer>
	);
};
