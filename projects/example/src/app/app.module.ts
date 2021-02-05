import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RetryableImageModule } from '../../../retryable-image/src/lib/retryable-image.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RetryableImageModule.forRoot({ retryDelay: 100, retryCount: 2 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
