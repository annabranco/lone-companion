import { gendersForTranslation } from '@/i18n/translate';
import type { Translations } from '../types';

export const translations: Translations = {
	'Change Language': {
		es: 'Cambiar Idioma',
		pt: 'Mudar Idioma',
		ru: 'Изменить язык',
		fr: 'Changer de Langue',
		de: 'Sprache ändern',
		jp: '言語を変更',
	},
	'Show Log': {
		es: 'Mostrar Log',
		pt: 'Mostrar Log',
		ru: 'Показать журнал',
		fr: 'Afficher le journal',
		de: 'Log anzeigen',
		jp: 'ログを表示',
	},
	'Delete All Logs': {
		es: 'Borrar todos los logs',
		pt: 'Apagar todos os logs',
		ru: 'Удалить все журналы',
		fr: 'Supprimer tous les journaux',
		de: 'Alle Loge löschen',
		jp: 'すべてのログを削除',
	},
	'Your log is empty': {
		es: 'Tu log está vacío',
		pt: 'Seu log está vazio',
		ru: 'Ваш журнал пуст',
		fr: 'Votre journal est vide',
		de: 'Ihr Log ist noch leer',
		jp: 'あなたのログは空です',
	},
	'Back': {
		es: 'Atrás',
		pt: 'Voltar',
		ru: 'Назад',
		fr: 'Retour',
		de: 'Zurück',
		jp: 'バック',
	},
	'Select': {
		es: 'Seleccionar',
		pt: 'Selecionar',
	},
	'Cancel': {
		es: 'Cancelar',
		pt: 'Cancelar',
	},
	'Random': {
		es: 'Aleatorio',
		pt: 'Aleatório',
	},
	[`Random::${gendersForTranslation.Woman}`]: {
		es: 'Aleatoria',
		pt: 'Aleatória',
	},
};
