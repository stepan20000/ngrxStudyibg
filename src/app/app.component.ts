import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from './appState.interface';
import { Observable } from 'rxjs/Observable';

import { Increment, Reset } from './reducers/timer/timer-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'NgRx/Store Timer';
  public time = {
    seconds: '00',
    minutes: '00'
  };

  private interval: number;
  private timer: Observable<number>;

  constructor(private store: Store<IAppState>) {
    this.timer = store.select('timer');
    this.timer.subscribe((time: number) => {
      this.time = this.processTimeService.calcMinutesAndSeconds(time);
    });
  }


  public onStart() {
    this.interval  = window.setInterval(() => {
      this.store.dispatch(new Increment());
    }, 1000);

  }

  public onPause() {
    clearInterval(this.interval);
  }

  public onStop() {
    clearInterval(this.interval);
    this.store.dispatch(new Reset());
  }
}
