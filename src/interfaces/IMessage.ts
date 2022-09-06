export enum TypeMessage {
  SUCCESS,
  FAIL,
  WARNING,
}

export interface IMessage {
  title: string;
  description: string;
  type: TypeMessage;
  id: number;
}
