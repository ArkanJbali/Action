import { ChartsModule } from 'ng2-charts';
import { PieComponent } from './charts/pie/pie.component';
import { AddActionService } from './Service/add-action.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatTableModule, MatSortModule, MatCardModule, MatPaginatorModule, MatSnackBarModule,
  MatButtonModule, MatIconModule, MatGridListModule, MatFormFieldModule,
  MatRadioModule, MatInputModule, MatSelectModule, MatToolbarModule, MatSidenavModule, MatStepperModule} from '@angular/material';
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
import { AlertsComponent } from './alerts/alerts.component';
import { LeftTableComponent } from './home-page/left-table/left-table.component';
import { RightTableComponent } from './home-page/right-table/right-table.component';
import { MiddleTableComponent } from './home-page/middle-table/middle-table.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddActionComponent,
    EventListComponent,
    ChartsComponent,
    AddActionsComponent,
    AlertsComponent,
    LeftTableComponent,
    RightTableComponent,
    MiddleTableComponent,
    PieComponent
    // NgbdModalConfig
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ChartsModule,
    MatToolbarModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatStepperModule,
    MatSortModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    MatSidenavModule,
    BsDropdownModule.forRoot()
  ],
  providers: [AddActionService, AddActionsComponent],
  bootstrap: [AppComponent],
  entryComponents: [AddActionsComponent, AlertsComponent]
})
export class AppModule { }
