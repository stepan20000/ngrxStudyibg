import * as TimerActions from './timer-actions';

export type Action = TimerActions.All;

const defaultState = { time: 0, minutes: '00', seconds: '00' };


export function timer(state: defaultState, action: Action) {
  switch (action.type) {
    case TimerActions.INCREMENT:
      return state + 1;

    case TimerActions.RESET:
      return 0;

    default:
      return state;
  }
}

