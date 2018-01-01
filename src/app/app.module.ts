import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { TestMyObservableComponent } from './components/test-my-observable/test-my-observable.component';



@NgModule({
  declarations: [
    AppComponent,
    TestMyObservableComponent,
  ],
  imports: [
    BrowserModule,
    // StoreModule.forRoot({ timer }),
    StoreDevtoolsModule.instrument({
      maxAge: 50
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
