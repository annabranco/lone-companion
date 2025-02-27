/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { AppButton } from '../../components/AppButton';
import { Colors } from '../../config';
import { Log, SettingsContext } from '../../contexts';
import { useLog } from '../../hooks';
import { LogDeleteButton, LogHeader, LogImage, LogImageWrapper, LogInfo, LogInfoWrapper, LogMessage, LogTitle, LogTitleWrapper, LogWrapper, TimeStamp } from './styled';

const getFormattedDate = (timestamp: Date | string) => {
	const date = new Date(timestamp).toLocaleString();
	return date.substring(0, date.length - 3).replace('/20', '/');
};

export const LogComponent = ({ header, id, info, timestamp, title, message, image }: Log) => {
	const { theme } = useContext(SettingsContext);
	const { deleteLog } = useLog();

	return (
		<LogWrapper id={id} key={id} theme={theme}>
			<LogDeleteButton kind="ghost" onClick={ () => deleteLog(id)}>X
			</LogDeleteButton>
				<TimeStamp>{getFormattedDate(timestamp)}</TimeStamp>

			{header && (
				<LogHeader
					styles={{
						...(header.color ? { color: header.color } : {}),
						...(header.size ? { fontSize: header.size } : {}),
						...(header.weight ? { fontWeight: header.weight } : {}),
						...(header.style ? { fontStyle: header.style } : {}),
					}}
				>
					{header.text}
				</LogHeader>
			)}

			{title && (
				<LogTitleWrapper>
					<LogTitle
						styles={{
							...(title.color ? { color: title.color } : {}),
							...(title.size ? { fontSize: title.size } : {}),
							...(title.weight ? { fontWeight: title.weight } : {}),
							...(title.style ? { fontStyle: title.style } : {}),
							...(title.align ? { textAlign: title.align } : {}),
						}}
					>
						{title.text}
					</LogTitle>
				</LogTitleWrapper>
			)}

			{image && (
				<LogImageWrapper
					css={{
						...(image.marginTop ? { marginTop: image.marginTop } : {}),
						...(image.marginBottom ? { marginBottom: image.marginBottom } : {}),
					}}
				>
					<LogImage src={image.source} css={{ ...(image.width ? { width: image.width } : {}) }} />
				</LogImageWrapper>
			)}

			<div>
				{message.text && (
					<LogMessage
						styles={{
							...(message.color ? { color: message.color } : {}),
							...(message.size ? { fontSize: message.size } : {}),
							...(message.weight ? { fontWeight: message.weight } : {}),
							...(message.style ? { fontStyle: message.style } : {}),
							...(message.align ? { textAlign: message.align } : {}),
						}}
					>
						{message.text}
					</LogMessage>
				)}
				{message.content}
			</div>

			{info && (
				<LogInfoWrapper css={{ backgroundColor: info.background || Colors.yellow2 }}>
					<LogInfo
						styles={{
							...(info.color ? { color: info.color } : {}),
							...(info.size ? { fontSize: info.size } : {}),
							...(info.weight ? { fontWeight: info.weight } : {}),
							...(info.style ? { fontStyle: info.style } : {}),
							...(info.align ? { textAlign: info.align } : {}),
						}}
					>
						{info.text}
					</LogInfo>
				</LogInfoWrapper>
			)}
		</LogWrapper>
	);
};
