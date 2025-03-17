import { Oracle } from '../Oracle/Oracle';
import { NameGenerator } from './names';
import { NpcGenerator } from './npcs';

export const Generators = () => {
    return (
        <>
            <Oracle />

            <NameGenerator />
            <NpcGenerator />
            {/* <CustomNpc /> */}
        </>
    );
};
