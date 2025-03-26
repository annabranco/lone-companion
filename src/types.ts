import type { SupportedLanguages } from '@/i18n';

export interface OptionWithMultiplier<O> {
  option: O;
  multiplier: number;
}

export interface OptionWithWeight<O> {
  option: O;
  weight: number;
}

export enum Theme {
  Dark = 'Dark',
  Light = 'Light',
}

export interface SettingsState {
  useTextRunes: boolean;
  theme: Theme;
}

export type LanguagesState = SupportedLanguages;

// export interface LoadedData {
//   settings: SettingsState;
//   language: SupportedLanguages;
// }

export interface EventsProps {
  onMouseOver?(event: React.MouseEvent): void;
  onMouseMove?(event: React.MouseEvent): void;
  onMouseOut?(event: React.MouseEvent): void;
  onMouseEnter?(event: React.MouseEvent): void;
  onMouseLeave?(event: React.MouseEvent): void;
  onMouseDown?(event: React.MouseEvent): void;
  onMouseUp?(event: React.MouseEvent): void;
  onWheel?(event: React.MouseEvent): void;
  onClick?(event: React.MouseEvent): void;
  onDblClick?(event: React.MouseEvent): void;
  onTouchStart?(event: React.TouchEvent): void;
  onTouchMove?(event: React.TouchEvent): void;
  onTouchEnd?(event: React.TouchEvent): void;
  onTap?(event: React.TouchEvent): void;
  onDblTap?(event: React.TouchEvent): void;
  onDragStart?(event: React.DragEvent): void;
  onDragMove?(event: React.DragEvent): void;
  onDragEnd?(event: React.DragEvent): void;
}
