import { Observer } from './observer';
import { Subscription } from './subscription';

export class Subject {
  private observers = [];

  constructor() {

  }

  public next?(x) {
    this.observers.forEach((observer) => {
      if (typeof observer.next === 'function') {
        observer.next(x);
      }
    });
  }

  public error?(e) {
    this.observers.forEach((observer) => {
      if (typeof observer.error === 'function') {
        observer.error(e);
      }
    });
  }

  public complete?() {
    this.observers.forEach((observer) => {
      if (typeof observer.complete === 'function') {
        observer.complete();
      }
    });
  }

  public subscribe(observer: Observer): Subscription {
    this.observers.push(observer);

    return new Subscription(observer);
  }
}
