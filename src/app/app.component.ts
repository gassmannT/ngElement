import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>My Page</h1>
    <app-world-cup-statistics [country]="'sui'"></app-world-cup-statistics>
  `
})
export class AppComponent {}
