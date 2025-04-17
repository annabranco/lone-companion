import { useContext } from 'react';

import { Colors, TextColor } from '../../config';
import { SettingsContext } from '../../contexts';
import {
    ToggleDisplay,
    ToggleElement,
    ToggleInputController,
    ToggleLabel,
    type ToggleProps,
    ToggleWrapper,
} from './';

export const Toggle = ({
    backgroundColor = { off: Colors.gray2, on: Colors.blue3 },
    buttonColor = { off: Colors.white, on: Colors.gray1 },
    isOn,
    label,
    name,
    onValueChange,
}: ToggleProps) => {
    const { theme } = useContext(SettingsContext);

    const onToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        onValueChange();
    };

    return (
        <ToggleWrapper>
            <ToggleElement>
                <ToggleInputController
                    type="checkbox"
                    id={`toggle-${name}`}
                    onChange={onToggle}
                />
                <ToggleDisplay
                    backgroundColor={backgroundColor}
                    buttonColor={buttonColor}
                    htmlFor={`toggle-${name}`}
                    isOn={isOn}
                />
            </ToggleElement>

            <ToggleLabel styles={TextColor[theme]}>{label}</ToggleLabel>
        </ToggleWrapper>
    );
};
