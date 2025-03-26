import { Genders } from '@/constants';
import { chance, pickFrom } from '@/utils';
import { LANGUAGES, SupportedLanguages, translate } from '@/i18n';

import {
	Ancestries,
	ANCESTRIES,
	ANCESTRIES_LIST_ON_NICKNAMES,
	FEMALE_NAMES,
	GENDERS,
	MALE_NAMES,
	Nickname,
	NICKNAME_LIST,
	NICKNAMES,
} from '../data';
import type { Name, NameProps } from './';

const getGender = (): Genders => pickFrom(GENDERS);

const getFirstName = ({ gender, ancestry }: NameProps): string =>
	gender === Genders.Woman
		? pickFrom(FEMALE_NAMES[ancestry as Ancestries])
		: pickFrom(MALE_NAMES[ancestry as Ancestries]);

const getParentName = ({ gender, ancestry }: NameProps): string => {
	const DESCENDENCE_TEXT = {
		[Genders.Woman]: 'daughter',
		[Genders.Man]: 'son',
		[Genders.GNC]: 'descendent',
	};

	const title = DESCENDENCE_TEXT[gender];
	const parentGender = getGender();

	return `, ${title} of ${parentGender === Genders.Woman
			? pickFrom(FEMALE_NAMES[ancestry as Ancestries])
			: pickFrom(MALE_NAMES[ancestry as Ancestries])
		}`;
};

interface GetNickNameProps {
	gender: Genders;
	language: SupportedLanguages;
}

export const getNickName = ({
	gender,
	language,
}: GetNickNameProps): Nickname => {
	const newNickname = pickFrom(NICKNAME_LIST);

	const translatedNickname = translate({
		text: newNickname,
		genderModifier: gender,
		language,
	});

	return { nickname: translatedNickname, update: NICKNAMES[newNickname] };
};

export const shouldPrefixNickname = (nickname: string): boolean =>
	!/^((the|a|o|e|el|la|le|-) |l')(\w+)?/.test(nickname);

type NameGeneratorProps = Partial<Name> & {
	onlyFirstName?: boolean;
	language: SupportedLanguages;
};

const defaultProps: NameGeneratorProps = {
	firstName: undefined,
	lastName: undefined,
	gender: undefined,
	ancestry: undefined,
	onlyFirstName: false,
	language: LANGUAGES.en,
};

export const getName = (props: NameGeneratorProps = defaultProps): Name => {
	const { onlyFirstName, language } = props;
	let { firstName, lastName, gender, ancestry } = props;
	let knownName = `${firstName}${lastName ? ' ' + lastName : ''}`;

	if (!gender) {
		gender = getGender();
	}
	if (!ancestry) {
		ancestry = pickFrom(ANCESTRIES);
	}
	if (!firstName) {
		firstName = getFirstName({ gender, ancestry });
		knownName = `${firstName}${lastName ? ' ' + lastName : ''}`;
	}

	if (onlyFirstName) {
		return {
			firstName,
			lastName: '',
			gender,
			ancestry,
			knownName: firstName,
		};
	}

	if (!lastName && chance(20)) {
		lastName = getParentName({ gender, ancestry });
		knownName = `${firstName}${lastName}`;
	} else if (!lastName && chance(15)) {
		const { nickname } = getNickName({ gender, language });

		if (Object.keys(ANCESTRIES_LIST_ON_NICKNAMES).includes(nickname)) {
			firstName = getFirstName({
				gender,
				ancestry:
					ANCESTRIES_LIST_ON_NICKNAMES[
					nickname as keyof typeof ANCESTRIES_LIST_ON_NICKNAMES
					],
			});
		}

		if (shouldPrefixNickname(nickname)) {
			firstName = `${nickname} ${firstName}`;
			knownName = `${firstName}`;
		} else {
			if (nickname.includes('- ')) {
				lastName = nickname.replace('- ', '');
				knownName = `${firstName} ${lastName}`;
			} else {
				lastName = nickname;
				knownName = `${firstName}, ${lastName}`;
			}
		}
	}

	return {
		firstName,
		lastName,
		gender,
		ancestry,
		knownName,
	};
};
