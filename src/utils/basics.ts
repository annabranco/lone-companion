export const rand = (top: number): number => Math.ceil(Math.random() * top);

export const randIndex = (top: number): number => Math.floor(Math.random() * top);

type PickFromType = <O>(options: O[]) => O;

export const pickFrom: PickFromType = (options) => options[randIndex(options.length)];

export const chance = (percent: number): boolean => (rand(100) <= percent ? true : false);
