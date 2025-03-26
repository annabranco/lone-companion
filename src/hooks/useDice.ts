import { useState } from 'react';
import { rand } from '@/utils';
import { diceSound } from '@/sounds/index';

import { useSound } from './useSound';

enum die {
	d2 = 2,
	d4 = 4,
	d6 = 6,
	d8 = 8,
	d10 = 10,
	d12 = 12,
	d20 = 20,
	d30 = 30,
	d100 = 100,
}

export interface Dice {
	dieType: die;
	number: number;
};
type dieType = keyof typeof die;
type DiceResult = Partial<Record<dieType, number>>;


export const useDice = () => {
	const [lastRoll, updateLastRoll] = useState<Dice[] | die>();
	const [useSilentRoll, toggleUseSilentRoll] = useState(false);
	const { play } = useSound(diceSound);


	const roll = (dieType: die, silentMode?: boolean): number => {
		updateLastRoll(dieType);
		toggleUseSilentRoll(!!silentMode);

		if (!silentMode) {
			setTimeout(() => {
				play();
			}, 100);
		}

		return rand(dieType);
	};

	const rollDice = (diceToRoll: Dice[], silentMode?: boolean): DiceResult[] | [] => {
		const results: DiceResult[] = [];
		
		updateLastRoll(diceToRoll);
		toggleUseSilentRoll(!!silentMode);

		diceToRoll.forEach(({ number, dieType }) => {
			for (let x = 1; x <= number; x++) {
				results.push({
					[`d${dieType}`]: roll(dieType),
				});
			}
		});

		if (!silentMode) {
			setTimeout(() => {
				play();
			}, 300);
		}

		return results;
	};

	const reRoll = () => {
		if (!lastRoll) {
			console.warn('reRoll: There are no previous rolls recorded');
			return;
		}

		if (typeof lastRoll === 'string') {
			return roll(lastRoll, useSilentRoll);
		}

		return rollDice(lastRoll as Dice[], useSilentRoll);
	};


	return {
		die,
		reRoll,
		roll,
		rollDice,
	}

}