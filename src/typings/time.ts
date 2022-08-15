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
  location: string;
  status: Status;
}

export interface EndTime {
  endTime: number;
  currentTime: number;
}

export interface Timer {
  currentTime: number;
}
