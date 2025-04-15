import { useContext, useState } from 'react';

import IconNpcCustom from '../../../../../assets/images/icons/icon-npc-custom.jpeg';
import { AppButton, AppButtonDefaultIcon, AppButtonInnerContent } from '../../../../../components/AppButton';
import { Input } from '../../../../../components/Input';
import { Select } from '../../../../../components/Select';
import { ToastDuration } from '../../../../../config';
import { Genders } from '../../../../../constants';
import { LanguagesContext } from '../../../../../contexts';
import { GeneratedContentType } from '../../../../../features/Generators';
import { useNotification } from '../../../../../hooks';

import { Age, AGE_LIST, Ancestries, ANCESTRIES_LIST } from '../../data';
import { generateNPC } from '../functions';
import { CustomNpcForm, GenerateNpcButton } from './styled';


export const CustomNpc = () => {
  const [displayForm, toggleDisplayForm] = useState(false);
  const [firstName, updateFirstName] = useState('');
  const [lastName, updateLastName] = useState('');
  const [gender, changeGender] = useState<Genders>();
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
      <AppButton glossy={true} onClick={() => toggleDisplayForm(!displayForm)}>
        <AppButtonInnerContent>
          <AppButtonDefaultIcon src={IconNpcCustom} alt={getText('Custom NPC')} />
          {getText('Custom NPC')}
        </AppButtonInnerContent>

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
              label: getText(gender),
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
              label: getText(ancestry, gender),
              value: ancestry,
            }))]}
            onSelect={(ancestry) => changeAncestry(ancestry as Ancestries)}
          />

          <Input
            onChange={updateFirstName}
            value={firstName}
            placeholder={getText('Name')}
          />
          <Input
            onChange={updateLastName}
            value={lastName}
            placeholder={getText('Last name or Nickname')}
          />

          <Select
            options={[{
              label: getText('Random Age'),
              value: '',
              default: true,
            },
            ...AGE_LIST.map((age) => ({
              label: getText(age, gender),
              value: age,
            }))]}
            onSelect={(age) => changeAge(age as Age)}
          />

          <Input
            onChange={updateBackground}
            value={background}
            placeholder={getText('Background')}
          />

          <GenerateNpcButton glossy={true} onClick={getNpc} kind="confirm">
            <AppButtonInnerContent>
              <AppButtonDefaultIcon src={IconNpcCustom} alt={getText('Generate NPC')} />
              {getText('Generate NPC')}
            </AppButtonInnerContent>

          </GenerateNpcButton>

          <AppButton onClick={() => toggleDisplayForm(false)} kind="ghost">
            {getText('Cancel')}
          </AppButton>
        </CustomNpcForm>
      )}
    </>
  );
};
