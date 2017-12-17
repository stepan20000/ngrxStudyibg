import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../../appState.interface';
import { ITimerState } from '../../reducers/timer/timer.interface';

@Component({
  selector: 'app-small-timer',
  templateUrl: './small-timer.component.html',
  styleUrls: ['./small-timer.component.scss']
})
export class SmallTimerComponent  {

  public time: ITimerState;

  private timeFromStore: Observable<ITimerState>;

  constructor(private store: Store<IAppState>) {
    this.timeFromStore = store.select('timer');
    this.timeFromStore.subscribe((data: ITimerState) => {
      this.time = data;
    });
  }
}
