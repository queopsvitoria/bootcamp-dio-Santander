import  localePt  from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-br'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }