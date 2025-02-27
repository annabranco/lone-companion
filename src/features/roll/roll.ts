import { rand } from '../../utils';

export enum DIE {
	d2 = 2,
	d4 = 4,
	d6 = 6,
	d8 = 8,
	d10 = 10,
	d12 = 12,
	d20 = 20,
	d100 = 100,
}
export interface Dice {
	die: DIE;
	number: number;
}
type dieType = keyof typeof DIE;
type DiceResult = Partial<Record<dieType, number>>;

export const roll = (die: DIE): number => rand(die);

export const rollDice = (diceToRoll: Dice[]): DiceResult[] | [] => {
	const results: DiceResult[] = [];

	diceToRoll.forEach(({ number, die }) => {
		for (let x = 1; x <= number; x++) {
			results.push({
				[`d${die}`]: roll(die),
			});
		}
	});
	return results;
};
