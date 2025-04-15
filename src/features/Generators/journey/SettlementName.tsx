import { useContext, useState } from 'react';

import IconSettlementName from '../../../assets/images/icons/icon-busy_road.jpg';
import { AppButton, AppButtonDefaultIcon, AppButtonInnerContent } from '../../../components/AppButton';
import { Select } from '../../../components/Select';
import { Typography } from '../../../components/Typography';
import { Colors, ToastDuration } from '../../../config';
import { Genders } from '../../../constants';
import { LanguagesContext } from '../../../contexts';
import { Ancestries, ANCESTRIES_LIST } from '../../../features/Generators/npcs/data';
import { useNotification } from '../../../hooks';
import { CustomSettlementForm, CustomSettlementOriginLabel, FormOkButton, getSettlementName } from './';

export const SettlementNameGenerator = () => {
  const [displayForm, toggleDisplayForm] = useState(false);
  const [ancestrySelected, changeAncestrySelected] = useState('');

  const { getText } = useContext(LanguagesContext);
  const { notify } = useNotification();

  const generateSettlementName = (ancestry: Ancestries | '') => {
    const name = getSettlementName(ancestry);   
    const title = getText('Settlement Name');

    toggleDisplayForm(false);
    changeAncestrySelected('');

    notify(
      {
        notificationTitle: title,
        header: { text: title },
        message: { text: `${name.original}${name.english ? ` (${name.english})` : ''}` },
      },
      { position: 'top-center', duration: ToastDuration.Fixed },
    );

  };

  const onClickmainButton = () => toggleDisplayForm(true);

  const onClickGenerate = () => generateSettlementName(ancestrySelected as Ancestries | '');

  return (
    <>
      <AppButton glossy={true} onClick={onClickmainButton}>
        <AppButtonInnerContent>
          <AppButtonDefaultIcon src={IconSettlementName} alt={getText('Settlement Name')} />
          <Typography styles={{ color: Colors.white }}>
            {getText('Settlement Name')}
          </Typography>
        </AppButtonInnerContent>
      </AppButton>

      {displayForm && (
        <CustomSettlementForm autoComplete="off">
          <CustomSettlementOriginLabel>{getText('Settlement Origin')}</CustomSettlementOriginLabel>
          <Select
            options={[{
              label: getText('Random', Genders.Woman),
              value: '',
              default: true,
            },
            ...ANCESTRIES_LIST.map((ancestry) => ({
              label: getText(ancestry, Genders.Woman),
              value: ancestry,
            }))]}
            onSelect={(ancestry) => changeAncestrySelected(ancestry)}
          />

          <FormOkButton glossy={true} onClick={onClickGenerate} kind="confirm">
            <AppButtonInnerContent>
              <AppButtonDefaultIcon src={IconSettlementName} alt={getText('Generate Name')} />
              {getText('Generate Name')}
            </AppButtonInnerContent>

          </FormOkButton>

          <AppButton onClick={() => toggleDisplayForm(false)} kind="ghost">
            {getText('Cancel')}
          </AppButton>
        </CustomSettlementForm>
      )};
    </>
  );
};
