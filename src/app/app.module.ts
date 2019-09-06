import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WorldCupStatisticsComponent } from './components/world-cup-statistics/world-cup-statistics.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, MatCardModule],
  declarations: [AppComponent, WorldCupStatisticsComponent],
  entryComponents: [WorldCupStatisticsComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(WorldCupStatisticsComponent, { injector: this.injector });

    customElements.define('world-cup-statistics', el);
  }
}
