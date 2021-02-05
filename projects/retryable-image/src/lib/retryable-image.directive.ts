import { Directive, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[retryImage]',
})
export class RetryableImageDirective implements OnDestroy {

  @Output() readonly whenRetry = new EventEmitter<number>();

  @Input() retryCount = 1;
  @Input() retryDelay = 50;

  private count = 0;
  private interval = 0;
  private retrying = false;

  constructor() {
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  @HostListener('error', ['$event']) onError(e: any): any {
    if (this.retrying || this.count >= this.retryCount) {
      return;
    }
    this.retrying = true;
    this.count++;
    const src = e.target.src;
    e.target.src = '';
    this.interval = setTimeout(() => {
      e.target.src = src;
      this.whenRetry.emit(this.count);
      this.retrying = false;
    }, this.retryDelay);
  }

}
