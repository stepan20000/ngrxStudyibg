import { Observer } from './observer';
import { Subject } from './subject';

export const constructObserver: (arg) => Observer = (arg) => {
  if(arg[0] instanceof Subject) {
    return arg[0];
  }
  let observer;
  if (typeof arg[0] === 'function') {
    observer = {
      next: arg[0],
      error: function(e) {
        this.next = () => {};
        if (arg[1]) {
          arg[1](e);
        }
      },
      complete: function() {
        console.log('observer complete');
        this.next = () => {};
        arg[2]();
      }
    };
  } else {
    observer = {
      next: arg[0].next,
      error: function (e) {
        this.next = () => {
        };
        this.complete = () => {
        };
        if (arg[0].error) {
          arg[0].error(e);
        }
        this.error = () => {
        };
      },
      complete: function () {
        console.log('observer complete');
        this.next = () => {
        };
        this.error = () => {
        };
        if (arg[0].complete) {
          arg[0].complete();
        }
        this.complete = () => {
        };
      }
    };
  }
  return observer;
};
