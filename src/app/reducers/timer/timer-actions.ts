import { Action } from '@ngrx/store';
import { ITimerState } from './timer.interface';

export const SET = '[Timer] Set';
export const RESET = '[Timer] Reset';

export class Set implements Action {
  readonly type = SET;
  constructor(public payload: ITimerState) {}
}

export class Reset implements Action {
  readonly type = RESET;
}

export type All = Set | Reset;
