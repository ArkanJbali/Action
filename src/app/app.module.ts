import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatTableModule, MatSortModule, MatCardModule, MatPaginatorModule} from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { AddActionComponent } from './add-action/add-action.component';
import { EventListComponent } from './event-list/event-list.component';
import { ChartsComponent } from './charts/charts.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { NgbdModalConfig } from './event-list/modal-config';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddActionComponent,
    EventListComponent,
    ChartsComponent,
    // NgbdModalConfig
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
