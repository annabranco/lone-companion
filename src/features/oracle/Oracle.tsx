import { useContext } from 'react';
import { AppButton } from '../../components/AppButton';
import { LanguagesContext } from '../../contexts';
import { useOracle } from '../../hooks/useOracle';


export const Oracle = () => {
	const { component: OracleComponent, oracleResult, rollOracle, toggleOracle, showProbabilities } = useOracle();
	const { getText } = useContext(LanguagesContext);

	return (
		<>
			<OracleComponent
				result={oracleResult}
				rollOracle={rollOracle}
				showProbabilities={showProbabilities}
				toggleOracle={toggleOracle}
			/>
			<AppButton onClick={toggleOracle}>{getText('Ask the Oracle')}</AppButton>
		</>
	);
};
