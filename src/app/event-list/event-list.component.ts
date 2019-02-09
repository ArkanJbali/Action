import { AlertService } from './../Service/alert.service';
import { AddActionService } from 'src/app/Service/add-action.service';
import { EventsService } from './../Service/events.service';
import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogConfig, MatDialog, MatDialogRef } from '@angular/material';
import { AddActionsComponent } from './add-actions/add-actions.component';
import { NewAction, EventsInstance } from '../Model/EventsList.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class EventListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['id', 'app', 'defectSeverity', 'condition', 'threshold', 'severity', 'action', 'description', 'edit'];
public events;

private _page = 1;
private selectedNum = 5;

eventsAct2: EventsInstance[];
@Input() eventss2: EventsInstance;

eventsAct: NewAction[];
@Input() eventss: NewAction;
_Critical: String = 'Critical';
_Warning: String = 'Warning';
_Error: String = 'Error';
  constructor(private eventService: EventsService,
    private dialog: MatDialog,
    private newAction: AddActionService,
    private route: Router,
    private location: Location,
    private dialogService: AlertService
    ) { }
  ngOnInit() {
   // this.eventService.getPosts().subscribe(data => this.events = data);
   this.eventService.getPosts(this._page , this.selectedNum).subscribe(data => {
    if (!data) {
      return;
    }
   // this.events = data;
    this.events = new MatTableDataSource(data);
    this.events.sort = this.sort;
    this.events.paginator = this.paginator;
  });
  }

  getEvents2(): void {
    this.eventService.getPosts(this._page , this.selectedNum)
    .subscribe(ev => this.eventsAct2 = ev);
  }


  OnAdd() {
    this.newAction.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    dialogConfig.height = '100%';
    this.dialog.open(AddActionsComponent, dialogConfig);
   }
   onEdit(row) {
    console.log(row, '\n onEdit');
      this.newAction.populateForm(row);
      const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    dialogConfig.height = '100%';
    this.dialog.open(AddActionsComponent, dialogConfig);
   }
   onDelete(action: NewAction): void {
     this.dialogService.openConfirmDialog('Are your sure to delete this record?').afterClosed().subscribe(
       res => {
      if ( res === true) {
       // this.eventsAct = this.eventsAct.filter(h => h !== action);
        this.eventService.deleteAction(action).subscribe();
        this.refresh();
        console.log('deleted\n' + action);
      } else {
        console.log('not deleted');
      }}
     );
   }
   goBack(): void {
    this.location.back();
  }
  refresh(): void {
    window.location.reload();
}
 save(): void {
    this.eventService.updateAction(this.eventss)
      .subscribe(() => this.goBack());
  }
  onNext(): any {
    this._page++;
    this.eventService.getPosts(this._page , this.selectedNum).subscribe(data => {
      if (data.length === 0) {
       this._page--;
         return;
      } else {
     // this.events = data;
      this.events = new MatTableDataSource(data);
      this.events.sort = this.sort;
      this.events.paginator = this.paginator;
     }
    });
    // this.getEvents2();
    // this.eventService.getPosts().subscribe(data => this.events = data);

  }
  onPrevious(): void {
    this._page--;
    // this.getEvents2();
    // this.eventService.getPosts().subscribe(data => this.events = data);
    this.eventService.getPosts(this._page , this.selectedNum).subscribe(data => {
     if (data.length === 0 || this._page === 0) {
      this._page++;
       return;
     } else {
      this.events = new MatTableDataSource(data);
      this.events.sort = this.sort;
      this.events.paginator = this.paginator;
     }
    // this.events = data;

   });
  }
  onFirsts(): void {
    this._page = 1;
   // this.getEvents2();
    // this.eventService.getPosts().subscribe(data => this.events = data);
    this.eventService.getPosts(this._page , this.selectedNum).subscribe(data => {
     if (data.length === 0) {
       return;
     } else {
      this.events = new MatTableDataSource(data);
      this.events.sort = this.sort;
      this.events.paginator = this.paginator;
     }

   });
  }
  selectChangeHandler (event: any) {
    this.selectedNum = event.target.value;
    console.log('hello' + this.selectedNum);
    this.getEvents2();
    this.eventService.getPosts(this._page , this.selectedNum).subscribe(data => {
      if (!data) {
        return;
      }
     // this.events = data;
      this.events = new MatTableDataSource(data);
      this.events.sort = this.sort;
      this.events.paginator = this.paginator;
      console.log('hello');
    });
  }
}
