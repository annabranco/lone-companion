import { Oracle } from '../Oracle/Oracle';
import { NameGenerator } from './npcs/NameGenerator';
import { NpcGenerator } from './npcs/NpcGenerator';
import { CustomNpc } from './npcs/NpcGenerator/components/CustomNpc';

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
