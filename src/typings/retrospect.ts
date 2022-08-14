export interface Retrospect {
  id: number;
  contents: string;
}

export interface RetrospectState {
  isEnd: boolean;
  retrospect: Retrospect[];
}
