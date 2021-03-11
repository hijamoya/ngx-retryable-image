import { Directive, EventEmitter, HostListener, Inject, Input, OnDestroy, Output } from '@angular/core';
import { RetryConfig } from './retry-config';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[retryImage]',
})
export class RetryableImageDirective implements OnDestroy {

  @Output() readonly whenRetry = new EventEmitter<number>();

  @Input() retryCount = this.config.retryCount;
  @Input() retryDelay = this.config.retryDelay;

  private count = 0;
  private interval = 0;
  private retrying = false;

  constructor(private config: RetryConfig) {
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
      if (!e.target) {
        return;
      }
      e.target.src = src;
      this.whenRetry.emit(this.count);
      this.retrying = false;
    }, this.retryDelay);
  }

}
