import { Component, ViewChild, OnInit, ElementRef, AfterViewInit } from '@angular/core';

import 'rxjs/add/observable/of';
import { Subscription } from 'rxjs/Subscription';

import * as Rx from 'rxjs/Rx';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('input') button: ElementRef;
  public title = 'NgRx/Store Timer';
  public count: number;
  private subs: Subscription;

  constructor() {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {

    // const observable = Rx.Observable.create(function subscribe(observer) {
    //   try {
    //     observer.next(1);
    //     observer.next(2);
    //     observer.error('observer error');
    //     throw new Error('fucking error');
    //     observer.next(3);
    //     observer.complete();
    //   } catch (err) {
    //     console.log('cactch error', err);
    //     observer.error(err); // delivers an error if it caught one
    //   } finally {
    //     console.log('finally');
    //   }
    // });
    // observable.subscribe(x => console.log(x),
    //   err => console.log('observable error', err),
    //   () => console.log('observable finally nah'));

    // const observable = Rx.Observable.create((observer) => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.error('critical error');
    //   observer.complete();
    // });
    //
    //
    // const observer = {
    //   next: x => console.log('Observer got a next value: ' + x),
    //   error: err => console.error('Observer got an error: ' + err),
    //   complete: () => console.log('Observer got a complete notification'),
    // };
    //
    // observable.subscribe(observer);


    // const subject = new Rx.Subject();
    //
    // subject.subscribe({
    //   next: (v) => console.log('observerA: ' + v)
    // });
    // subject.subscribe({
    //   next: (v) => console.log('observerB: ' + v)
    // });
    //
    // const observable = Rx.Observable.from([1, 2, 3, 4, 5]);
    // const multicasted = observable.multicast(subject).ref;

    // const observable = Rx.Observable.of(3);
    // console.log(observable);
    // const subscription = observable.subscribe();
    // console.log(subscription);

// ************************************************

    // const observable1 = Rx.Observable.create(function subscribe(observer) {
    //   observer.next(1);
    //   observer.error('qqq error');
    //   observer.next(2);
    //   setTimeout(() => {
    //     console.log('in timeout');
    //     observer.next(5);
    //     console.log('timeout after next');
    //   }, 1000);
    //   observer.next(4);
    //   //observer.complete();
    // });
    //
    // let subscription = observable1.subscribe({
    //   next: (x) => console.log('next ', x),
    //   error: (e) => console.log('error ', e),
    //   complete: () => console.log('complete')
    // });

    // let subscription1 = observable1.subscribe({
    //   next: (x) => console.log('next 1', x),
    //   error: (e) => console.log('error 1', e),
    //   complete: () => console.log('complete 1')
    // });

    // console.log('subscription === subscription1', subscription === subscription1);
    //
    // subscription1.unsubscribe();

// *************************************************
//     var subject = new Rx.Subject();
//
//     subject.subscribe({
//       next: (v) => console.log('observerA: ' + v)
//     });
//     subject.subscribe({
//       next: (v) => console.log('observerB: ' + v)
//     });
//
//     subject.next(1);
//     subject.next(2);
  }
}
