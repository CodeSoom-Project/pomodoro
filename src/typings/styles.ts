import { ReactNode } from 'react';

export interface ModeButton {
  children: ReactNode;
  onClick?: () => void;
}

export interface CenterLayout {
  children: ReactNode;
}
