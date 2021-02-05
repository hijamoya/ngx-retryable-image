import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly retryCount = 3;
  readonly retryDelay = 1000;
  readonly errorSrc = 'https://angular.io/assets/wrong/image/path/angular.svg';
  readonly correctSrc = 'https://angular.io/assets/images/logos/angular/angular.svg';

  title = 'example';
  src = this.errorSrc;

  onRetry(count: number): void {
    console.log(`Retry ${count} times`);
    if (count === 2) {
      this.src = this.correctSrc;
    }
  }

}
