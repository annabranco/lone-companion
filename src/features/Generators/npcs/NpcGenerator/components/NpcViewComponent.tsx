import { useContext, useState } from 'react';

import { Typography } from '@/components/Typography';
import { LanguagesContext } from '@/contexts';

import {
	NpcBackground,
	NpcGoal,
	NpcGoalButton,
	NpcGoalWrapper,
	NpcInneritem,
	NpcInnerSection,
	NpcName,
	NpcnameWrapper,
	NpcPresentation,
	NpcSection,
	NpcSectionTitle,
	type NpcViewComponentProps,
	NpcWrapper,
} from './';

export const NpcViewComponent = ({ npc }: NpcViewComponentProps) => {
	const { knownName, gender, background, presentation, goal, height, weight, hair, eyes, facialHair, quirks, skin } = npc;
	const [displayGoal, toggleDisplayGoal] = useState(false);
	const { getText } = useContext(LanguagesContext);

	return (
		<NpcWrapper>
			<NpcnameWrapper>
				<NpcName>{knownName}</NpcName>
			</NpcnameWrapper>

			<NpcBackground>{background ? `${background}` : getText(`Child::${gender}`)}</NpcBackground>

			<NpcSection>
				<NpcPresentation>{presentation}</NpcPresentation>
			</NpcSection>

			<NpcSection>
				<NpcSectionTitle>{getText('Goal')}</NpcSectionTitle>
				<NpcGoalWrapper>
					{displayGoal ? (
						<NpcGoal>{goal.charAt(0).toUpperCase() + goal.slice(1)}</NpcGoal>
					) : (
						<NpcGoalButton kind="ghost" onClick={() => toggleDisplayGoal(true)}>
							{getText('Hidden').toUpperCase()}
						</NpcGoalButton>
					)}
				</NpcGoalWrapper>
			</NpcSection>

			<NpcSection>
				<NpcSectionTitle>{getText('Appearance')}</NpcSectionTitle>

				<NpcInnerSection>
					<NpcInneritem>
						<Typography as="span">
							{height} and {weight} build
						</Typography>
					</NpcInneritem>
					<NpcInneritem>
						<Typography as="span">{skin} skin</Typography>
					</NpcInneritem>
					<NpcInneritem>
						<Typography as="span">{hair}</Typography>
					</NpcInneritem>

					<NpcInneritem>
						<Typography as="span">{eyes.charAt(0).toUpperCase() + eyes.slice(1)}</Typography>
						{facialHair ? <Typography as="span">{facialHair}</Typography> : ''}
					</NpcInneritem>
				</NpcInnerSection>
			</NpcSection>

			<NpcSection>
				<NpcSectionTitle>{getText('Quirks')}</NpcSectionTitle>

				<NpcInnerSection>
					{quirks.map((quirk, index) => (
						<NpcInneritem key={index}>
							<Typography as="span">{quirk}</Typography>
						</NpcInneritem>
					))}
				</NpcInnerSection>
			</NpcSection>
		</NpcWrapper>
	);
};
