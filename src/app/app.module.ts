import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    /*AgmCoreModule.forRoot({
      apiKey: 'c06403b28c93810fea577948175e118b'
    })*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
