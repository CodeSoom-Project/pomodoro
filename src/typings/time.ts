export enum Mode {
  Focus = '/focus',
  Break = '/break',
}

export enum Status {
  Pause = 'pause',
  Resume = 'resume',
  End = 'end',
  Stop = 'stop',
  Running = 'running',
  Initial = 'initial',
}

export interface TimerState {
  endTime: number;
  remainTime: string;
  pauseTime: number;
  mode: Mode;
  isPause: boolean;
  isOption: boolean;
  status: Status;
  times: string[];
}

export interface EndTime {
  endTime: number;
  currentTime: number;
}

export interface Timer {
  currentTime: number;
}
