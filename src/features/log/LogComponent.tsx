/** @jsxImportSource @emotion/react */

import { useContext, useState } from 'react';

import { NpcViewComponent } from '@/components/NpcView';
import { Colors } from '@/config';
import { LanguagesContext, SettingsContext } from '@/contexts';
import { GeneratedContentType } from '@/features/Generators';
import { NpcCharacteristics } from '@/features/Generators/npcs';
import { useLog } from '@/hooks';

import {
	LogContent,
	LogContentArea,
	LogDeleteButton,
	LogHeader,
	LogHeaderArea,
	LogImage,
	LogImageWrapper,
	LogInfo,
	LogInfoWrapper,
	LogMessage,
	LogTitle,
	LogTitleWrapper,
	LogWrapper,
	TimeStamp,
} from './styled';

const getFormattedDate = (timestamp: Date | string) => {
	const date = new Date(timestamp).toLocaleString();
	return date.substring(0, date.length - 3).replace('/20', '/');
};

export const LogComponent = ({
	header,
	content,
	id,
	image,
	info,
	message,
	timestamp,
	title,
	type,
}: Log) => {
	const { theme } = useContext(SettingsContext);
	const { getText } = useContext(LanguagesContext);
	const { deleteLog } = useLog();
	const [isDeleteVisible, toggleIsDeleteVisible] = useState(false);

	// TODO [06-Mar-25]: Add confirmation modal to delete

	const getContent = () => {
		if (type === GeneratedContentType.NPC) {
			return (
				<NpcViewComponent npc={content as NpcCharacteristics} />
			);
		}
	}

	return (
		<LogWrapper id={id} key={id} theme={theme}>
			<LogHeaderArea>
				{header && (
					<LogHeader
						styles={{
							...(header.color ? { color: header.color } : {}),
							...(header.size ? { fontSize: header.size } : {}),
							...(header.style ? { fontStyle: header.style } : {}),
							...(header.weight ? { fontWeight: header.weight } : {}),
						}}
					>
						{header.text}
					</LogHeader>
				)}

				{isDeleteVisible ? (
					<LogDeleteButton kind="ghost" onClick={() => deleteLog(id)}>
						{getText('Delete')}
					</LogDeleteButton>
				) : (
					<TimeStamp onMouseEnter={() => toggleIsDeleteVisible(true)}>
						{getFormattedDate(timestamp)}
					</TimeStamp>
				)}
			</LogHeaderArea>

			<LogContentArea>
				{title && (
					<LogTitleWrapper>
						<LogTitle
							styles={{
								...(title.align ? { textAlign: title.align } : {}),
								...(title.color ? { color: title.color } : {}),
								...(title.size ? { fontSize: title.size } : {}),
								...(title.style ? { fontStyle: title.style } : {}),
								...(title.weight ? { fontWeight: title.weight } : {}),
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
							...(image.marginBottom
								? { marginBottom: image.marginBottom }
								: {}),
						}}
					>
						<LogImage
							src={image.source}
							css={{ ...(image.width ? { width: image.width } : {}) }}
						/>
					</LogImageWrapper>
				)}

				{message && (
								<div>
									{message.text && (
										<LogMessage
											styles={{
												...(message.align ? { textAlign: message.align } : {}),
												...(message.color ? { color: message.color } : {}),
												...(message.size ? { fontSize: message.size } : {}),
												...(message.style ? { fontStyle: message.style } : {}),
												...(message.weight ? { fontWeight: message.weight } : {}),
											}}
										>
											{message.text}
										</LogMessage>
									)}
								</div>
				)}

			{content && (
				<LogContent>{getContent()}</LogContent>
			)}

				{info && (
					<LogInfoWrapper
						css={{ backgroundColor: info.background || Colors.yellow2 }}
					>
						<LogInfo
							styles={{
								...(info.align ? { textAlign: info.align } : {}),
								...(info.color ? { color: info.color } : {}),
								...(info.size ? { fontSize: info.size } : {}),
								...(info.style ? { fontStyle: info.style } : {}),
								...(info.weight ? { fontWeight: info.weight } : {}),
							}}
						>
							{info.text}
						</LogInfo>
					</LogInfoWrapper>
				)}
			</LogContentArea>
		</LogWrapper>
	);
};
