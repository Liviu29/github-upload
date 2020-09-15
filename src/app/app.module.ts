import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MyMaterialModule} from './my-material.module';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AudioServeDashboardComponent} from './audio-serve-dashboard/audio-serve-dashboard.component';
import {AudioServeDashboardDialogComponent} from './audio-serve-dashboard-dialog/audio-serve-dashboard-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AudioServeDashboardComponent,
    AudioServeDashboardDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AudioServeDashboardDialogComponent]
})
export class AppModule { }
