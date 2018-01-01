import { Observer } from './observer';

export class Subscription {
  observer: Observer;

  constructor(observer: Observer) {
    this.observer = observer;
  }

  unsubscribe(): void {
    if (this.observer.next) {
      this.observer.next = () => {};
    }
    if (this.observer.error) {
      this.observer.error = () => {};
    }
    if (this.observer.complete) {
      this.observer.complete = () => {};
    }
  }
}
