import { EventListComponent } from './event-list/event-list.component';
import { AddActionComponent } from './add-action/add-action.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path: '', redirectTo: '/home:id', pathMatch: 'full' },
{ path: 'eventlist', component: EventListComponent },
{ path: 'addAction', component: AddActionComponent },
{ path: 'home/:id', component: HomePageComponent },
{ path: 'home', component: HomePageComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
