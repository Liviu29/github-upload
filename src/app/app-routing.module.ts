import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AudioServeDashboardComponent} from './audio-serve-dashboard/audio-serve-dashboard.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'; // CLI imports router

const routes: Routes = [
  { path: 'audio-serve-dashboard', component: AudioServeDashboardComponent },
  { path: '',   redirectTo: '/audio-serve-dashboard', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
