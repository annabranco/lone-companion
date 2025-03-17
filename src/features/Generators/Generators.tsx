import { Oracle } from '../Oracle/Oracle';
import { NameGenerator } from './names';
import { NpcGenerator } from './npcs';
import { CustomNpc } from './npcs/components/CustomNpc';

export const Generators = () => {
    return (
        <>
            <Oracle />
            <NameGenerator />
            <NpcGenerator />
            <CustomNpc />
        </>
    );
};
