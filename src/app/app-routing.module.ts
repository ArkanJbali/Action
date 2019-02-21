import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';
import { EventListComponent } from './event-list/event-list.component';
import { AddActionComponent } from './add-action/add-action.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomePageComponent },
{ path: 'eventlist/:id', component: EventListComponent },
{ path: 'eventlist', component: EventListComponent },
// { path: 'addAction', component: AddActionComponent },
{ path: 'home/:id', component: HomePageComponent },
// { path: 'home', component: HomePageComponent },
{ path: 'about', component: AboutComponent },
{ path: '**', component: PagenotfoundComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
