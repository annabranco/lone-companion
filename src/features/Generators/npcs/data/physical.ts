export enum Height {
	Average = 'Average height',
	Short = 'Short',
	Tall = 'Tall',
	VeryShort = 'Very short',
	VeryTall = 'Very tall',
}

export enum Weight {
	Athletic = 'athletic',
	Atrophied = 'atrophied',
	Average = 'average',
	BarrelChested = 'barrel-chested',
	BeerBellied = 'beer-bellied',
	BroadShouldered = 'broad-shouldered',
	Bulky = 'bulky',
	Chubby = 'chubby',
	Curvaceous = 'curvaceous',
	Decrepit = 'decrepit',
	Defined = 'defined',
	Doughy = 'doughy',
	ExtremelyOverweight = 'extremely overweight',
	Fit = 'fit',
	Frail = 'frail',
	Healthy = 'healthy',
	Herculean = 'herculean',
	HourglassShaped = 'hourglass-shaped',
	Hulking = 'hulking',
	MildlyOverweight = 'mildly overweight',
	Muscular = 'muscular',
	Narrow = 'narrow',
	PearShaped = 'pear-shaped',
	Petite = 'petite',
	Round = 'round',
	Scrawny = 'scrawny',
	Skinny = 'skinny',
	Starved = 'starved',
	Stout = 'stout',
	ThickWaisted = 'thick-waisted',
	Thin = 'thin',
	Underweight = 'underweight',
}


export const HEIGHT = [
	...Array.from({length: 1}, () => Height.VeryShort),
	...Array.from({length: 2}, () => Height.Short),
	...Array.from({length: 4}, () => Height.Average),
	...Array.from({length: 2}, () => Height.Tall),
	...Array.from({length: 1}, () => Height.VeryTall),
];

export const WEIGHT = [
	...Array.from({length: 1}, () => Weight.Decrepit),
	...Array.from({length: 1}, () => Weight.Atrophied),
	...Array.from({length: 1}, () => Weight.Frail),
	...Array.from({length: 1}, () => Weight.Starved),
	...Array.from({length: 1}, () => Weight.Scrawny),
	...Array.from({length: 1}, () => Weight.Underweight),
	...Array.from({length: 1}, () => Weight.Skinny),
	...Array.from({length: 1}, () => Weight.Thin),
	...Array.from({length: 1}, () => Weight.Petite),
	...Array.from({length: 4}, () => Weight.Average),
	...Array.from({length: 1}, () => Weight.Average),
	...Array.from({length: 1}, () => Weight.Average),
	...Array.from({length: 1}, () => Weight.HourglassShaped),
	...Array.from({length: 1}, () => Weight.Curvaceous),
	...Array.from({length: 1}, () => Weight.Narrow),
	...Array.from({length: 1}, () => Weight.Defined),
	...Array.from({length: 1}, () => Weight.Healthy),
	...Array.from({length: 1}, () => Weight.Fit),
	...Array.from({length: 1}, () => Weight.Athletic),
	...Array.from({length: 1}, () => Weight.BroadShouldered),
	...Array.from({length: 1}, () => Weight.Muscular),
	...Array.from({length: 1}, () => Weight.Stout),
	...Array.from({length: 1}, () => Weight.ThickWaisted),
	...Array.from({length: 1}, () => Weight.Herculean),
	...Array.from({length: 1}, () => Weight.Hulking),
	...Array.from({length: 1}, () => Weight.Bulky),
	...Array.from({length: 1}, () => Weight.PearShaped),
	...Array.from({length: 1}, () => Weight.MildlyOverweight),
	...Array.from({length: 1}, () => Weight.BeerBellied),
	...Array.from({length: 1}, () => Weight.BarrelChested),
	...Array.from({length: 1}, () => Weight.Chubby),
	...Array.from({length: 1}, () => Weight.Doughy),
	...Array.from({length: 1}, () => Weight.Round),
	...Array.from({length: 1}, () => Weight.ExtremelyOverweight),
];
