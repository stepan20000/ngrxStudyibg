import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../appState.interface';
import { ProcessTimeService } from '../../services/process-time/process-time.service';

@Component({
  selector: 'app-small-timer',
  templateUrl: './small-timer.component.html',
  styleUrls: ['./small-timer.component.scss']
})
export class SmallTimerComponent implements OnInit {

  constructor(

    private store: Store<IAppState>,
    private processTimeService: ProcessTimeService

  ) {
    this.timer = store.select('timer');
    this.timer.subscribe((time: number) => {
      this.time = this.processTimeService.calcMinutesAndSeconds(time);
    });
  }

  ngOnInit() {
  }

}
