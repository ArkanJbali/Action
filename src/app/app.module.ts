import { AddActionService } from './Service/add-action.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatTableModule, MatSortModule, MatCardModule, MatPaginatorModule,
  MatButtonModule, MatIconModule, MatGridListModule, MatFormFieldModule,
  MatRadioModule, MatInputModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { AddActionComponent } from './add-action/add-action.component';
import { EventListComponent } from './event-list/event-list.component';
import { ChartsComponent } from './charts/charts.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { NgbdModalConfig } from './event-list/modal-config';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import { AddActionsComponent } from './event-list/add-actions/add-actions.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddActionComponent,
    EventListComponent,
    ChartsComponent,
    AddActionsComponent,
    // NgbdModalConfig
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    MatToolbarModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    BsDropdownModule.forRoot()
  ],
  providers: [AddActionService, AddActionsComponent],
  bootstrap: [AppComponent],
  entryComponents: [AddActionsComponent]
})
export class AppModule { }
