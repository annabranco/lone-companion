import { Genders } from '../../../../constants';
import { chance, pickFrom, rand } from '../../../../utils';
import { LANGUAGES } from '../../../../i18n';

import {
  Age,
  AGE_GROUP,
  ANCESTRIES,
  Ancestries,
  BACKGROUNDS,
  DEMEANORS,
  DESCENDENCE_TEXT,
  EYES_COLORS,
  FACIAL_HAIR,
  GENDERS,
  GOALS,
  HAIR_COLORS,
  HAIR_STYLE_FEMALE,
  HAIR_STYLE_MALE,
  HEIGHT,
  PREDOMINANT_EYES_COLOR_BY_ANCESTRY,
  PREDOMINANT_HAIR_COLOR_BY_ANCESTRY,
  PREDOMINANT_SKIN_TONE_BY_ANCESTRY,
  PRONOUMS,
  QUIRKS,
  SKIN_TONES,
  STARES,
  WEIGHT,
  YOUNG_GENDER,
} from '../data';
import { getName, type NpcCharacteristics, type NpcGeneratorProps } from '../';

const getGender = (): Genders => pickFrom(GENDERS);

export const getHair = ({
  ancestry,
  gender,
}: {
  ancestry: Ancestries;
  gender: Genders;
}) => {
  const hairColor = chance(70)
    ? pickFrom(PREDOMINANT_HAIR_COLOR_BY_ANCESTRY[ancestry])
    : pickFrom(HAIR_COLORS);
  const hairStyle =
    gender === Genders.Woman
      ? pickFrom(HAIR_STYLE_FEMALE)
      : pickFrom(HAIR_STYLE_MALE);
  return hairStyle.replace('[COLOR]', hairColor);
};

const getFacialHair = ({ age, gender }: { age: Age; gender: Genders }) => {
  let facialHair =
    gender === Genders.Woman ? '' : chance(50) ? pickFrom(FACIAL_HAIR) : '';

  if (
    age === Age.Teenager &&
    (facialHair.includes('beard') || facialHair.includes('mustache'))
  ) {
    facialHair = 'Some sparse facial hair starting to grow';
  } else if (age === Age.YoungAdult && facialHair.includes('beard')) {
    facialHair = 'Thin scruffy undeveloped beard';
  } else if (age === Age.YoungAdult && facialHair.includes('mustache')) {
    facialHair = 'Thin scruffy undeveloped mustache';
  } else if (
    age === Age.Teenager ||
    age === Age.YoungAdult ||
    age === Age.Child
  ) {
    facialHair = '';
  }
  return facialHair;
};

export const getSkinTone = (ancestry: Ancestries) =>
  chance(85)
    ? pickFrom(PREDOMINANT_SKIN_TONE_BY_ANCESTRY[ancestry])
    : pickFrom(SKIN_TONES);

const getEyes = (ancestry: Ancestries) => {
  const eyesColor = chance(70)
    ? pickFrom(PREDOMINANT_EYES_COLOR_BY_ANCESTRY[ancestry])
    : pickFrom(EYES_COLORS);

  const stareType = pickFrom(STARES);

  return eyesColor.includes('eyes')
    ? eyesColor.replace('[STARE]', stareType)
    : `${eyesColor} ${stareType} eyes`;
};

const getBackground = ({
  age,
  background: previousBackground,
  gender,
}: {
  age: Age;
  background?: string;
  gender: Genders;
}) => {
  let background = previousBackground || pickFrom(BACKGROUNDS);

  if (age === Age.Child) {
    background = '';
  } else if (age === Age.Teenager && background) {
    background = `${DESCENDENCE_TEXT[gender]} ${background}`;
  } else if (age === Age.YoungAdult && background) {
    background = chance(25) ? `Apprentice of ${background}` : background;
  }
  return background;
};

// const adjustGenderText = ({age, gender}: {age: Age; gender: Genders}) => {
// 	let genderText: string = gender;

// 	if (age === Age.Child || age === Age.Teenager) {
// 		genderText = YOUNG_GENDER[gender];
// 	}

// 	return genderText;
// };

const getPresentation = ({
  age,
  gender,
  demeanor,
}: {
  age: Age;
  gender: Genders;
  demeanor: string;
}) => {
  let genderText: string = gender.toLowerCase();
  let presentation = '';

  if (age === Age.Child || age === Age.Teenager) {
    genderText = YOUNG_GENDER[gender];
  }

  if (age.includes('Around')) {
    presentation = `${demeanor} ${genderText} ${age
      .replace('Around', `around ${PRONOUMS[gender][1]}`)
      .toLowerCase()}`;
  } else {
    presentation = `${demeanor} ${age !== Age.Child ? age.toLowerCase() : ''
      } ${genderText}`;
  }
  return presentation;
};

// const adjustAncestryText = (ancestry: Ancestries) => {
// 	let adjustedAncestry: string = ancestry;

// 	if (ancestry === Ancestries.Ironlander) {
// 		adjustedAncestry = '';
// 	} else if (ancestry === Ancestries.Fantastic) {
// 		adjustedAncestry = `with unknown ancestry`;
// 	} else {
// 		adjustedAncestry = `with ${ancestry} ancestry`;
// 	}

// 	return adjustedAncestry;
// };

const getQuirks = (gender: Genders) => {
  const quirks: string[] = [];
  const quirksNumber = rand(3);

  for (let x = 0; x < quirksNumber; x++) {
    const newQuirk = pickFrom(QUIRKS);
    const hasAppearanceQuirk = quirks.some(
      (quirk) => quirk.includes('ugl') || quirk.includes('beautiful'),
    );

    const newQuirkIsAboutAppearance =
      newQuirk.includes('ugl') || newQuirk.includes('beautiful');

    if (hasAppearanceQuirk && newQuirkIsAboutAppearance) {
      continue;
    }
    quirks.push(newQuirk.replace('[PRON]', PRONOUMS[gender][0]));
  }
  return quirks;
};

export const generateNPC = (
  {
    age,
    ancestry,
    background,
    firstName,
    gender,
    lastName,
    language,
  }: NpcGeneratorProps = { language: LANGUAGES.en },
): NpcCharacteristics => {
  const characteristics: NpcCharacteristics = {
    age: age || pickFrom(AGE_GROUP),
    ancestry: ancestry || pickFrom(ANCESTRIES),
    background: background || '',
    demeanor: pickFrom(DEMEANORS),
    eyes: '',
    facialHair: '',
    firstName: firstName || '',
    gender: gender || getGender(),
    goal: pickFrom(GOALS),
    hair: '',
    height: pickFrom(HEIGHT),
    knownName: '',
    lastName: lastName || '',
    presentation: '',
    pronoum: '',
    quirks: [],
    skin: '',
    weight: pickFrom(WEIGHT),
  };

  if (!firstName || !lastName) {
    const nameData = getName({
      ancestry: characteristics.ancestry,
      firstName,
      gender: characteristics.gender,
      language,
      lastName,
    });

    characteristics.firstName = firstName || nameData.firstName;
    characteristics.lastName = lastName || nameData.lastName || '';
    characteristics.knownName = nameData.knownName;
  } else {
    characteristics.knownName = `${firstName} ${lastName}`;
  }

  characteristics.background = getBackground({
    age: characteristics.age,
    background,
    gender: characteristics.gender,
  });

  characteristics.hair = getHair({
    ancestry: characteristics.ancestry,
    gender: characteristics.gender,
  });

  characteristics.facialHair = getFacialHair({
    age: characteristics.age,
    gender: characteristics.gender,
  });

  characteristics.eyes = getEyes(characteristics.ancestry);

  characteristics.skin = getSkinTone(characteristics.ancestry);

  characteristics.quirks = getQuirks(characteristics.gender);

  characteristics.presentation = getPresentation({
    age: characteristics.age,
    gender: characteristics.gender,
    demeanor: characteristics.demeanor,
  });

  // characteristics.genderText = adjustGenderText({
  // 	age: characteristics.age,
  // 	gender: characteristics.gender,
  // });

  return characteristics;
};
