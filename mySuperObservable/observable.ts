import { Observer } from './observer';
import { Subscription } from './subscription';
import { constructObserver } from './constructObserver';

export class Observable {
  baseFunction: (x: Observer) => void;

  constructor(foo: (x: Observer) => void) {
      this.baseFunction = foo,
      this.subscribe =  function (next, err?, complete?) {
        const observer = constructObserver(Array.prototype.slice.call(arguments));
        this.baseFunction(observer);

        return new Subscription(observer);
      };
  }

  static create(foo: (x: Observer) => void): Observable {
    return new Observable(foo);
  }

  static of(value): Observable {
    return new Observable((observer) => {
      observer.next(value);
    });
  }

  static from(arr: Array<any>): Observable {
    return new Observable((observer) => {
      arr.forEach((value) => observer.next(value));
    });
  }

  public subscribe(next, err?, complete?): Subscription {
    const observer = constructObserver(Array.prototype.slice.call(arguments));
    console.log('observer in observable subscribe', observer);
    this.baseFunction(observer);

    return new Subscription(observer);
  }

}
