import { ReactNode } from 'react';

export interface ModeButton {
  children: ReactNode;
  onClick?: () => void;
}

export interface OnlyChildren {
  children: ReactNode;
}

export interface TimeSelectLayout extends OnlyChildren {
  background: string;
}
