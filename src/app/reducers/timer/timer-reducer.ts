import * as TimerActions from './timer-actions';
import { ITimerState } from './timer.interface';

type Action = TimerActions.All;

const defaultState = { time: 0, minutes: '00', seconds: '00' };


export function timer(state: ITimerState = defaultState, action: Action) {
  switch (action.type) {
    case TimerActions.SET:
      return action.payload;

    case TimerActions.RESET:
      return defaultState;

    default:
      return state;
  }
}

