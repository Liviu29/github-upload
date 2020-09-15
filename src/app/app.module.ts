import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MyMaterialModule} from './my-material.module';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AudioServeDashboardComponent} from './audio-serve-dashboard/audio-serve-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AudioServeDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
