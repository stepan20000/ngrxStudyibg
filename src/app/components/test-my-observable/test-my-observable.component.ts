import { Component, OnInit } from '@angular/core';
import { MySuperRx } from '../../../../mySuperObservable';
import { Observer } from '../../../../mySuperObservable/observer';

@Component({
  selector: 'app-test-my-observable',
  templateUrl: './test-my-observable.component.html',
  styleUrls: ['./test-my-observable.component.scss']
})
export class TestMyObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const foo = MySuperRx.Observable.create(function (observer: Observer) {
    //   console.log('Hello');
    //   observer.next(42);
    //   observer.next(100);
    //   observer.next(200);
    //   setTimeout(() => {
    //     observer.next(300); // happens asynchronously
    //   }, 1000);
    // });
    //
    // console.log('before');
    // foo.subscribe(function (x) {
    //   console.log(x);
    // });
    // console.log('after');
    //
    //
    // var observable = MySuperRx.Observable.create(function (observer) {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    //   setTimeout(() => {
    //     observer.next(4);
    //     observer.complete();
    //   }, 1000);
    // });
    //
    // console.log('just before subscribe');
    // observable.subscribe({
    //   next: x => console.log('got value ' + x),
    //   error: err => console.error('something wrong occurred: ' + err),
    //   complete: () => console.log('done'),
    // });
    // console.log('just after subscribe');


    // var foo = MySuperRx.Observable.create(function (observer) {
    //   console.log('Hello');
    //   observer.next(42);
    // });
    //
    // foo.subscribe(function (x) {
    //   console.log(x);
    // });
    // foo.subscribe(function (y) {
    //   console.log(y);
    // });

    // const observable1 = MySuperRx.Observable.create(function subscribe(observer) {
    //   observer.next(1);
    //   observer.next(2);
    //   // console.log('observer before timeout', observer.next.toString());
    //   setTimeout(() => {
    //     // console.log('in timeout');
    //     // console.log('observer in timeout', observer.next.toString());
    //     observer.next(5);
    //   }, 1000);
    //   observer.complete();
    //   observer.next(4);
    // });
    //
    // const subscription = observable1.subscribe({
    //   next: (x) => console.log('next ', x),
    //   error: (e) => console.log('error ', e),
    //   complete: () => console.log('complete')
    // });

   //  const subscription1 = observable1.subscribe({
   //    next: (x) => console.log('next 1', x),
   //    error: (e) => console.log('error 1', e),
   //    complete: () => console.log('complete 1')
   //
   //  });
   //
   // subscription.unsubscribe();

// ********************** Simple Subject  **************************************

    // const subject = new MySuperRx.Subject();
    //
    // console.log(subject);
    //
    // const subscrA = subject.subscribe({
    //   next: (v) => console.log('observerA: ' + v)
    // });
    // const subscrB = subject.subscribe({
    //   next: (v) => console.log('observerB: ' + v)
    // });
    //
    // subject.next(1);
    // subscrA.unsubscribe();
    // subject.next(2);

 // *********************************************************************************

 // ************** Observable Of / from ***************************************************
 //    const obs = MySuperRx.Observable.of([1, 2, 3, 4, 5, 6, 2589]);
 //    obs.subscribe((x) => console.log('Observable from ', x));

 // **********************************************************************************

// ******************************* Subscribe subject *********************************
    const subject = new MySuperRx.Subject();

    console.log(subject);

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });
    subject.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });

    console.log(subject);

    const observable = MySuperRx.Observable.from([1, 2, 3]);

    observable.subscribe(subject); // You can subscribe providing a Subject



// ***********************************************************************************

  }
}
