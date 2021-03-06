import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppComponent } from './app.component';
import { SmallTimerComponent } from './components/small-timer/small-timer.component';

import { timer } from './reducers/timer/timer-reducer';
import { BigTimerComponent } from './components/big-timer/big-timer.component';


@NgModule({
  declarations: [
    AppComponent,
    SmallTimerComponent,
    BigTimerComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ timer }),
    StoreDevtoolsModule.instrument({
      maxAge: 50
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
