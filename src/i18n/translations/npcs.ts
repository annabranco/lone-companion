import { gendersForTranslation } from '../../i18n/translate';
import type { Translations } from '../types';
import { Genders } from '../../constants';
import { Age } from '../../features/Generators/npcs/data';

export const translations: Translations = {
	'Random Name': {
		es: 'Nombre Aleatorio',
		pt: 'Nome Aleatório',
		ru: 'Случайное Имя',
		fr: 'Nom Aléatoire',
		de: 'Zufälliger Name',
		jp: 'ランダムな名前',
	},
	[`Child::${gendersForTranslation.Man}`]: {
		en: 'Child',
		es: 'Niño',
		pt: 'Criança',
		ru: 'Ребенок',
		fr: 'Enfant',
		de: 'Kind',
		jp: '子供',
	},
	[`Child::${gendersForTranslation.Woman}`]: {
		en: 'Child',
		es: 'Niña',
		pt: 'Criança',
		ru: 'Ребенок',
		fr: 'Enfant',
		de: 'Kind',
		jp: '子供',
	},
	[`Child::${gendersForTranslation['Gender-Nonconforming Person']}`]: {
		en: 'Child',
		es: 'Niñe',
		pt: 'Criança',
		ru: 'Ребенок',
		fr: 'Enfant',
		de: 'Kind',
		jp: '子供',
	},
	'Goal': {
		es: 'Objetivo',
		pt: 'Objetivo',
		ru: 'Цель',
		fr: 'Objectif',
		de: 'Ziel',
		jp: '目標',
	},
	'Hidden': {
		es: 'Oculto',
		pt: 'Oculto',
		ru: 'Скрыто',
		fr: 'Caché',
		de: 'Versteckt',
		jp: '隠し',
	},
	'Appearance': {
		es: 'Apariencia',
		pt: 'Aparência',
		ru: 'Внешность',
		fr: 'Apparence',
		de: 'Aussehen',
		jp: '外観',
	},
	'Quirks': {
		es: 'Características',
		pt: 'Características',
		ru: 'Особенности',
		fr: 'Caractéristiques',
		de: 'Eigenschaften',
		jp: '特徴',
	},
	'daughter of': {
		es: 'hija de',
		pt: 'filha de',
	},
	'son of': {
		es: 'hijo de',
		pt: 'filho de',
	},
	'descendent of': {
		es: 'descendiente de',
		pt: 'descendiente de',
	},
	[Genders.Woman]: {
		es: 'Mujer',
		pt: 'Mulher',
	},
	[Genders.Man]: {
		es: 'Hombre',
		pt: 'Homem',
	},
	[Genders.GNC]: {
		es: 'Mujer',
		pt: 'Mulher',
	},
	[`${Age.Child}::${gendersForTranslation.Man}`]: {
		es: 'Niño',
		pt: 'Criança',
	},
	[`${Age.Teenager}::${gendersForTranslation.Man}`]: {
		es: 'Adolescente',
		pt: 'Adolescente',
	},
	[`${Age.YoungAdult}::${gendersForTranslation.Man}`]: {
		es: 'Joven adulto',
		pt: 'Jovem adulto',
	},
	[`${Age.Around30s}::${gendersForTranslation.Man}`]: {
		es: 'Cerca de los 30 años',
		pt: 'Ao redor de 30 anos',
	},
	[`${Age.MiddleAged}::${gendersForTranslation.Man}`]: {
		es: 'Mediana edad',
		pt: 'Média idade',
	},
	[`${Age.Around60s}::${gendersForTranslation.Man}`]: {
		es: 'Cerca de los 60 años',
		pt: 'Ao redor de 60 anos',
	},
	[`${Age.Old}::${gendersForTranslation.Man}`]: {
		es: 'Anciano',
		pt: 'Ancião',
	},
	[`${Age.VeryOld}::${gendersForTranslation.Man}`]: {
		es: 'Muy viejo',
		pt: 'Muito velho',
	},
	[`${Age.Child}::${gendersForTranslation.Woman}`]: {
		es: 'Niña',
		pt: 'Criança',
	},
	[`${Age.Teenager}::${gendersForTranslation.Woman}`]: {
		es: 'Adolescente',
		pt: 'Adolescente',
	},
	[`${Age.YoungAdult}::${gendersForTranslation.Woman}`]: {
		es: 'Joven adulta',
		pt: 'Jovem adulta',
	},
	[`${Age.Around30s}::${gendersForTranslation.Woman}`]: {
		es: 'Cerca de los 30 años',
		pt: 'Ao redor de 30 anos',
	},
	[`${Age.MiddleAged}::${gendersForTranslation.Woman}`]: {
		es: 'Mediana edad',
		pt: 'Média idade',
	},
	[`${Age.Around60s}::${gendersForTranslation.Woman}`]: {
		es: 'Cerca de los 60 años',
		pt: 'Ao redor de 60 anos',
	},
	[`${Age.Old}::${gendersForTranslation.Woman}`]: {
		es: 'Anciana',
		pt: 'Anciã',
	},
	[`${Age.VeryOld}::${gendersForTranslation.Woman}`]: {
		es: 'Muy vieja',
		pt: 'Muito velha',
	},
	[`${Age.Child}::${gendersForTranslation['Gender-Nonconforming Person']}`]: {
		es: 'Niñe',
		pt: 'Criance',
	},
	[`${Age.Teenager}::${gendersForTranslation['Gender-Nonconforming Person']}`]: {
		es: 'Adolescente',
		pt: 'Adolescente',
	},
	[`${Age.YoungAdult}::${gendersForTranslation['Gender-Nonconforming Person']}`]: {
		es: 'Joven adulte',
		pt: 'Jovem adulte',
	},
	[`${Age.Around30s}::${gendersForTranslation['Gender-Nonconforming Person']}`]: {
		es: 'Cerca de los 30 años',
		pt: 'Ao redor de 30 anos',
	},
	[`${Age.MiddleAged}::${gendersForTranslation['Gender-Nonconforming Person']}`]: {
		es: 'Mediana edad',
		pt: 'Média idade',
	},
	[`${Age.Around60s}::${gendersForTranslation['Gender-Nonconforming Person']}`]: {
		es: 'Cerca de los 60 años',
		pt: 'Ao redor de 60 anos',
	},
	[`${Age.Old}::${gendersForTranslation['Gender-Nonconforming Person']}`]: {
		es: 'Anciane',
		pt: 'Anciãe',
	},
	[`${Age.VeryOld}::${gendersForTranslation['Gender-Nonconforming Person']}`]: {
		es: 'Muy vieje',
		pt: 'Muito velhe',
	},
};
