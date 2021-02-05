# ngx-retryable-image

ngx-retryable-image is an Angular `Directive` to help traditional `img` tag to retry to load image.

# Installation

```angular2html
npm install ngx-retryable-image
```

# Useage

Just add the `retryImage` directive to your image tag:
```angular2html
<img class="img"
     [src]="src"
     [retryCount]="retryCount"
     [retryDelay]="retryDelay"
     (whenRetry)="onRetry($event)"
     retryImage/>
```

# Custom settings

1. `retryCount`: defines the max number of attempts to retry, default is 1.
2. `retryDelay`: defines the delay between each retry, default is 50ms.
3. `whenRetry`: emits when the retry happened, it also provides the current retry count.

# Global settings

You can use `RetryableImageModule.forRoot` to define global settings:

```typescript
RetryableImageModule.forRoot({ retryDelay: 100, retryCount: 2 })
```

# Publish

```angular2html
ng build retryable-image --prod
npm publish dist/retryable-image
```

License
-----
    Copyright 2021 Jam Hsu

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
