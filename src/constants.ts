export enum Genders {
	Woman = 'Woman',
	Man = 'Man',
	GNC = 'Gender-nonconforming person',
}

export enum Ancestries {
	Anglosaxon = 'Anglo-saxon',
	African = 'African',
	Arabic = 'Arabic',
	Chinese = 'Chinese',
	Dutch = 'Dutch',
	Eastern = 'Eastern European',
	French = 'French',
	Germanic = 'Germanic',
	Indian = 'Indian',
	Irish = 'Irish',
	Ironlander = 'Ironlander',
	Italian = 'Italian',
	Japanese = 'Japanese',
	Korean = 'Korean',
	Norse = 'Norse',
	Portuguese = 'Portuguese',
	Russian = 'Russian',
	Spanish = 'Spanish',
	Fantastic = 'Fantastic',
}

export const PRONOUMS = {
	[Genders.Woman]: ['She', 'her'],
	[Genders.Man]: ['He', 'him'],
	[Genders.GNC]: ['They', 'their'],
};
