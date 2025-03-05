import { ToggleInput, ToggleLabel, ToggleWrapper } from './styled';
import type { ToggleProps } from './types';

export const Toggle = ({ backgroundColor, buttonColor, isOn, name, onValueChange }: ToggleProps) => {
    const onToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        onValueChange();
    };

    return (
        <ToggleWrapper>
            <ToggleInput type="checkbox" id={`toggle-${name}`} onChange={onToggle} />
            <ToggleLabel backgroundColor={backgroundColor} buttonColor={buttonColor} htmlFor={`toggle-${name}`} isOn={isOn} />
        </ToggleWrapper>
    );
};
