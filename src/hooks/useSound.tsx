import { RefObject, useMemo, useRef } from 'react';

interface ReturnProps {
	play: () => void;
	stop: () => void;
	loop: () => void;
}

export const useSound = (source: string): ReturnProps => {
	const audioElement = useMemo(() => new Audio(source), [source]);
	const soundRef: RefObject<HTMLAudioElement | null> = useRef(audioElement);

	const play = () => {
		const sound = soundRef.current;

		if (sound) {
			sound.currentTime = 0;
			sound.loop = false;
			sound.volume = 0.7;
			sound.play();
		}
	};

	const loop = () => {
		const sound = soundRef.current;

		if (sound) {
			sound.currentTime = 0;
			sound.loop = true;
			sound.volume = 0.7;
			sound.play();
		}
	};

	const stop = () => {
		const sound = soundRef.current;

		if (sound) {
			sound.pause();
		}
	};

	return {
		play,
		stop,
		loop,
	};
};
