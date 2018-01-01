export class Observer {
  public next?;
  public error?;
  public complete?;

  constructor(a, b?, c?) {
    if (typeof a === 'function') {
      this.next = a;
      if (b) {
        this.error = b;
      }
      if (c) {
        this.complete = c;
      }
    } else {
      this.next = a.next;
      if (a.next) {
        this.error = a.error;
      }
      if (a.complete) {
        this.complete = a.complete;
      }
    }
  }
}
