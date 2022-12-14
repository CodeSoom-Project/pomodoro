import { ReactNode } from 'react';

export interface ModeButton {
  children: ReactNode;
  onClick?: () => void;
}

export interface OnlyChildren {
  children: ReactNode;
}

export interface Layout extends OnlyChildren {
  background: string;
}
