/** @jsxImportSource @emotion/react */

import { useContext, useEffect, useMemo, useState } from 'react';
import { AppButton } from '../../components/AppButton';
import { OverlayBackground } from '../../config';
import { LanguagesContext, SettingsContext } from '../../contexts';
import { POSITIVE_LIKELY } from './constants';
import {
	ConditionalWrapper,
	OracleOverlay,
	OracleResultImage,
	oracleStyles,
	Possibilities,
	PossibilityTitle,
	Question,
	QuestionArea,
	QuestionInput,
	Results,
} from './styled';
import { OracleComponentProps } from './types';

export const OracleComponent = ({
	result,
	rollOracle,
	showProbabilities,
	toggleOracle,
}: OracleComponentProps) => {
	const [isQuestionDisplayed, toggleIsQuestionDisplayed] = useState(false);
	const [isResultlVisible, toggleIsResultlVisible] = useState(false);
	const [question, updateQuestion] = useState('');
	const { getText } = useContext(LanguagesContext);
	const { theme } = useContext(SettingsContext);

	const possibilities = useMemo(
		() => ({
			[getText('Almost certain')]: POSITIVE_LIKELY.ALMOST_CERTAIN,
			[getText('Likely')]: POSITIVE_LIKELY.LIKELY,
			[getText('50/50')]: POSITIVE_LIKELY.MAYBE,
			[getText('Unlikely')]: POSITIVE_LIKELY.UNLIKELY,
			[getText('Small chance')]: POSITIVE_LIKELY.SMALL_CHANCE,
		}),
		[getText],
	);

	const resetState = () => {
		toggleIsQuestionDisplayed(false);
		updateQuestion('');
	};

	const onClickPossibility = (
		event: React.MouseEvent,
		chance: POSITIVE_LIKELY,
	) => {
		event.stopPropagation();
		toggleIsQuestionDisplayed(false);
		updateQuestion('');
		rollOracle({ chance, question });
	};

	const onClickDisplayQuestionInput = (event: React.MouseEvent) => {
		event.stopPropagation();
		updateQuestion('');
		toggleIsQuestionDisplayed(true);
	};

	const onChangeQuestionInput = (
		event: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		const { value } = event.currentTarget;

		updateQuestion(value);
	};

	const closeOracle = () => {
		toggleOracle();
		resetState();
	};

	const closeResults = () => {
		toggleIsResultlVisible(false);
		resetState();
	};

	const preventClosingOverlay = (event: React.MouseEvent) =>
		event.stopPropagation();

	useEffect(() => {
		if (result) {
			toggleIsResultlVisible(true);
		} else {
			toggleIsResultlVisible(false);
		}
	}, [result]);

	return (
		<>
			{showProbabilities && (
				<OracleOverlay onClick={closeOracle}>
					<PossibilityTitle>
						{getText('How likely is the answer to be positive?')}
					</PossibilityTitle>

					<Possibilities>
						{Object.entries(possibilities).map(([text, chance]) => (
							<AppButton
								key={text}
								onClick={(event) => onClickPossibility(event, chance)}
								styles={oracleStyles.possibilityButton}
							>
								{text}
							</AppButton>
						))}
					</Possibilities>

					<QuestionArea>
						{isQuestionDisplayed ? (
							<QuestionInput
								placeholder={getText('Write the question')}
								onChange={onChangeQuestionInput}
								onClick={preventClosingOverlay}
								autoComplete="off"
								autoFocus
								rows={5}
								cols={40}
							/>
						) : (
							<AppButton
								onClick={onClickDisplayQuestionInput}
								styles={oracleStyles.questionTitle}
								kind="secondary"
							>
								{getText('Log the question (optional)')}
							</AppButton>
						)}
					</QuestionArea>
				</OracleOverlay>
			)}

			<ConditionalWrapper visible={isResultlVisible}>
				{result && (
					<OracleOverlay
						onClick={closeResults}
						css={[OverlayBackground[theme], oracleStyles.oracleResult]}
					>
						<Question>{result.question}</Question>

						<OracleResultImage alt="" src={result.rune} theme={theme} />
						<Results>{result.text}</Results>
					</OracleOverlay>
				)}
			</ConditionalWrapper>
		</>
	);
};
