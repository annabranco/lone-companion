import { useContext, useState } from 'react';

import { AppButton } from '../../../../components/AppButton';
import { Input } from '../../../../components/Input';
import { Select } from '../../../../components/Select';
import { ToastDuration } from '../../../../config';
import { Ancestries, Genders } from '../../../../constants';
import { LanguagesContext } from '../../../../contexts';
import { useNotification } from '../../../../hooks/useNotification';
import { ANCESTRIES_LIST } from '../../names/constants';
import { GeneratedContentType } from '../../types';
import { AGES_LIST } from '../age';
import { Age } from '../constants';
import { generateNPC } from '../functions';
import { CustomNpcForm, GenerateNpcButton } from './styled';

export const CustomNpc = () => {
  const [displayForm, toggleDisplayForm] = useState(false);
  const [firstName, updateFirstName] = useState('');
  const [lastName, updateLastName] = useState('');
  const [gender, changeGender] = useState<Genders>();

  console.log('❗️ CustomNpc.tsx:24 >> gender', gender);

  const [ancestry, changeAncestry] = useState<Ancestries>();
  const [age, changeAge] = useState<Age>();
  const [background, updateBackground] = useState('');
  const { getText, language } = useContext(LanguagesContext);
  const { notify } = useNotification();

  const getNpc = () => {
    const title = getText('NPC');
    const npc = generateNPC({
      age,
      ancestry,
      background,
      firstName,
      gender,
      lastName,
      language,
    });

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

    toggleDisplayForm(false);
  };

  return (
    <>
      <AppButton onClick={() => toggleDisplayForm(!displayForm)}>
        {getText('Custom NPC')}
      </AppButton>

      {displayForm && (
        <CustomNpcForm autoComplete="off">
          <Select
            options={[{
                label: getText('Random Gender'),
                value: '',
                default: true,
              },
              ...Object.values(Genders).map((gender) => ({
                label: gender,
                value: gender,
              }))]}
            onSelect={(gender) => changeGender(gender as Genders)}
          />

          <Select
            options={[{
                label: getText('Random Ancestry'),
                value: '',
                default: true,
              },
              ...ANCESTRIES_LIST.map((ancestry) => ({
                label: ancestry,
                value: ancestry,
              }))]}
            onSelect={(ancestry) => changeAncestry(ancestry as Ancestries)}
          />

          <Input
            onChange={updateFirstName}
            value={firstName}
            placeholder="Name"
          />
          <Input
            onChange={updateLastName}
            value={lastName}
            placeholder="Last name or Nickname"
          />

          <Select
            options={[{
                label: getText('Random Age'),
                value: '',
                default: true,
              },
              ...AGES_LIST.map((age) => ({
                label: age,
                value: age,
              }))]}
            onSelect={(age) => changeAge(age as Age)}
          />

          <Input
            onChange={updateBackground}
            value={background}
            placeholder="Background"
          />

          <GenerateNpcButton onClick={getNpc} kind="confirm">
            {getText('Generate NPC')}
          </GenerateNpcButton>

          <AppButton onClick={() => toggleDisplayForm(false)} kind="ghost">
            {getText('Cancel')}
          </AppButton>
        </CustomNpcForm>
      )}
    </>
  );
};
