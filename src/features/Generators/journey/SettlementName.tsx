import { useContext, useMemo, useState } from 'react';

import IconSettlementName from '../../../assets/images/icons/icon-busy_road.jpg';
import {
  AppButton,
  AppButtonDefaultIcon,
  AppButtonInnerContent,
} from '../../../components/AppButton';
import { Select } from '../../../components/Select';
import { ToastDuration } from '../../../config';
import { Genders } from '../../../constants';
import { LanguagesContext } from '../../../contexts';
import {
  Ancestries,
  ANCESTRIES_LIST,
} from '../../../features/Generators/npcs/data';
import { useNotification } from '../../../hooks';
import {
  CustomSettlementForm,
  CustomSettlementOriginLabel,
  FormOkButton,
  getSettlementName,
} from './';

export const SettlementNameGenerator = () => {
  const [displayForm, toggleDisplayForm] = useState(false);
  const [ancestrySelected, changeAncestrySelected] = useState('');

  const { getText } = useContext(LanguagesContext);
  const { notify } = useNotification();

  const text = useMemo(() => getText('Settlement Name'), [getText]);

  const generateSettlementName = (ancestry: Ancestries | '') => {
    const name = getSettlementName(ancestry);

    toggleDisplayForm(false);
    changeAncestrySelected('');

    notify(
      {
        notificationTitle: text,
        header: { text },
        message: {
          text: `${name.original}${name.english ? ` (${name.english})` : ''}`,
        },
      },
      { position: 'top-center', duration: ToastDuration.Fixed },
    );
  };

  const onClickmainButton = () => toggleDisplayForm(true);

  const onClickGenerate = () =>
    generateSettlementName(ancestrySelected as Ancestries | '');

  return (
    <>
      <AppButton glossy={true} onClick={onClickmainButton} text={text}>
        <AppButtonInnerContent>
          <AppButtonDefaultIcon src={IconSettlementName} alt={text} />
        </AppButtonInnerContent>
      </AppButton>

      {displayForm && (
        <CustomSettlementForm autoComplete="off">
          <CustomSettlementOriginLabel>
            {getText('Settlement Origin')}
          </CustomSettlementOriginLabel>
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
              <AppButtonDefaultIcon
                src={IconSettlementName}
                alt={getText('Generate Name')}
              />
              {getText('Generate Name')}
            </AppButtonInnerContent>
          </FormOkButton>

          <AppButton onClick={() => toggleDisplayForm(false)} kind="ghost">
            {getText('Cancel')}
          </AppButton>
        </CustomSettlementForm>
      )}
    </>
  );
};
