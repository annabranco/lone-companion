export interface ToggleStyles {
    backgroundColor?: {
        off: string;
        on: string;
    };
    buttonColor?: {
        off: string;
        on: string;
    };
    disabled?: boolean;
    isOn: boolean;
}

export interface ToggleProps extends ToggleStyles {
    label?: string;
    name: string;
    onValueChange: () => void;
}