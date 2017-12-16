import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


import { IAppState } from '../../appState.interface';
import { Set, Reset } from '../../reducers/timer/timer-actions';
import {ITimerState} from '../../reducers/timer/timer.interface';

@Component({
  selector: 'app-big-timer',
  templateUrl: './big-timer.component.html',
  styleUrls: ['./big-timer.component.scss']
})
export class BigTimerComponent {

  public time: ITimerState = {
    seconds: '00',
    minutes: '00'
  };

  private timeFromStore: Observable<ITimerState>;
  private interval: number;
  private timerData = 0;

  constructor(private store: Store<IAppState>) {
    this.timeFromStore = store.select('timer');
    this.timeFromStore.subscribe((data: ITimerState) => {
      this.time = data;
    });
  }


  public onStart() {
    this.interval  = window.setInterval(() => {
      this.timerData++;
      this.store.dispatch(new Set(this.processTime()));
    }, 10);

  }

  public onPause() {
    clearInterval(this.interval);
  }

  public onStop() {
    clearInterval(this.interval);
    this.store.dispatch(new Reset());
  }

  private processTime(): ITimerState {
    let minutes: string;
    let seconds: string;
    let sec: number;
    let min: number;
    this.timerData = this.timerData > Infinity - 100  ? 0 : this.timerData;
    sec = this.timerData % 60;
    seconds = sec < 10 ? '0' + sec : '' + sec;
    min = Math.floor((this.timerData - sec) / 60);
    min = min > 99 ? 0 : min;
    minutes = min < 10 ? '0' + min : '' + min;
    return { seconds, minutes};
  }
}
