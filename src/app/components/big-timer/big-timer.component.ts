import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


import { IAppState } from '../../appState.interface';
import { Set, Reset } from '../../reducers/timer/timer-actions';
import {ITimerState} from '../../reducers/timer/timer.interface';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-big-timer',
  templateUrl: './big-timer.component.html',
  styleUrls: ['./big-timer.component.scss']
})
export class BigTimerComponent {

  public timeFromStore: Observable<ITimerState>;
  private timerData = 0;
  private isTimerOn =  false;
  private interval: Subscription;

  constructor(private store: Store<IAppState>) {
    this.timeFromStore = store.select('timer');
  }


  public onStart() {
    if (!this.isTimerOn) {
      this.isTimerOn = true;
      this.interval = IntervalObservable.create(10).subscribe(() => {
        this.store.dispatch(new Set(this.processTime(++this.timerData)));
      });
    }
  }

  public onPause() {
    this.isTimerOn = false;
    this.interval.unsubscribe();
  }

  public onStop() {
    this.isTimerOn = false;
    this.timerData = 0;
    this.interval.unsubscribe();
    this.store.dispatch(new Reset());
  }

  private processTime(time: number): ITimerState {
    let minutes: string;
    let seconds: string;
    let sec: number;
    let min: number;
    time = time > Infinity - 100  ? 0 : time;
    sec = time % 60;
    seconds = sec < 10 ? '0' + sec : '' + sec;
    min = Math.floor((time - sec) / 60);
    min = min > 99 ? 0 : min;
    minutes = min < 10 ? '0' + min : '' + min;
    return { seconds, minutes};
  }
}
