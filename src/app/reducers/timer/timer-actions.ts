// counter.actions.ts
import { Action } from '@ngrx/store';

export const INCREMENT  = '[Timer] Increment';
export const RESET      = '[Timer] Reset';

export class Increment implements Action {
  readonly type = INCREMENT;
}

export class Reset implements Action {
  readonly type = RESET;
}

export type All = Increment | Reset;
