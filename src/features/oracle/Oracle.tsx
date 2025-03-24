import { useContext } from 'react';
import { AppButton } from '../../components/AppButton';
import { LanguagesContext } from '../../contexts';
import { useOracle } from '../../hooks/useOracle';
import IconRunes from '../../assets/images/icons/icon-runes.png';
import { AppButtonDefaultIcon, AppButtonInnerContent } from '../../components/AppButton/styled';

export const Oracle = () => {
	const {
		component: OracleComponent,
		oracleResult,
		rollOracle,
		toggleOracle,
		showProbabilities,
	} = useOracle();
	const { getText } = useContext(LanguagesContext);

	return (
		<>
			<OracleComponent
				result={oracleResult}
				rollOracle={rollOracle}
				showProbabilities={showProbabilities}
				toggleOracle={toggleOracle}
			/>

			<AppButton glossy={true} onClick={toggleOracle}>
				<AppButtonInnerContent>
					<AppButtonDefaultIcon src={IconRunes} alt={getText('Ask the Oracle')} />
					{getText('Ask the Oracle')}

				</AppButtonInnerContent>
			</AppButton>
		</>
	);
};
