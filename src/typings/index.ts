import { Dispatch, SetStateAction } from 'react';

type retrospect = {
  id: number;
  contents: string;
};

export interface Times {
  times: string[];
}

export interface SelectableTime {
  time: string;
  onClick: (seconds: string) => void;
}

export interface RemainTime {
  remainTime: string;
  endPomodoro?: () => void;
  pause?: () => void;
  resume?: () => void;
  isPause?: boolean;
}

export interface RetrospectModalType {
  onChangeRetrospect?: Dispatch<SetStateAction<any>>;
  retrospect?: retrospect;
  submitRetrospect?: () => void;
}

export interface Retrospect {
  retrospect: retrospect;
}
