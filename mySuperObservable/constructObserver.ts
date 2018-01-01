import { Observer } from './observer';
import { Subject } from './subject';

export const constructObserver: (foo, arg) => Observer = function(foo, arg) {
  if (foo === null) {
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
  } else {

    if(arg[0] instanceof Subject) {
      return arg[0];
    }
    let observer;
    if (typeof arg[0] === 'function') {
      observer = {
        next: function(x) { return arg[0](foo(x));},
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
        next: function(x) { return arg[0].next(foo(x)); },
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
  }
};
