import { ModuleWithProviders, NgModule } from '@angular/core';

import { RetryableImageDirective } from './retryable-image.directive';
import { RetryConfig } from './retry-config';

@NgModule({
  declarations: [RetryableImageDirective],
  imports: [],
  exports: [RetryableImageDirective]
})
export class RetryableImageModule {
  static forRoot(retryConfig: RetryConfig): ModuleWithProviders<RetryableImageModule> {
    return {
      ngModule: RetryableImageModule,
      providers: [
        {
          provide: RetryConfig,
          useValue: retryConfig
        }
      ]
    };
  }
}
