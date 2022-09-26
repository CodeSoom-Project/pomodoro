import { Dispatch, SetStateAction } from 'react';

import { Mode } from './time';

type retrospect = {
  id: number;
  contents: string;
};

export interface SelectableTime {
  time: string;
  onClick: (seconds: string) => void;
}

export interface RemainTime {
  remainTime: string;
  endPomodoro?: () => void;
  pause?: () => void;
  resume?: () => void;
  navigator?: () => void;
  isPause?: boolean;
  mode: Mode;
}

export interface RetrospectForm {
  onChangeRetrospect?: Dispatch<SetStateAction<any>>;
  retrospect?: retrospect;
  submitRetrospect?: () => void;
}

export interface Retrospect {
  retrospect: retrospect;
  id: number;
}

export interface TimeAddFormType {
  addTime: string;
  mode: Mode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (time: string) => void;
  isOption: boolean;
  optionHandler: () => void;
}
