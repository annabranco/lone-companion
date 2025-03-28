import { SettlementNameGenerator } from '@/features/Generators/journey';
import { Oracle } from '@/features/Oracle/Oracle';
import { NameGenerator } from '@/features/Generators/npcs/NameGenerator';
import { NpcGenerator } from '@/features/Generators/npcs/NpcGenerator';
import { CustomNpc } from '@/features/Generators/npcs/NpcGenerator/components/CustomNpc';

export const Generators = () => {
    return (
        <>
            <Oracle />
            <NameGenerator />
            <NpcGenerator />
            <CustomNpc />
            <SettlementNameGenerator />
        </>
    );
};
