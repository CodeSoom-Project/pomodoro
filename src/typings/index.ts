export interface Times {
  times: string[];
}

export interface SelectableTime {
  time: string;
  onClick: (seconds: string) => void;
}
