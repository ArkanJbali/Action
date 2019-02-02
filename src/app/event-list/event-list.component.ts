import { EventsService } from './../Service/events.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogConfig, MatDialog, MatDialogRef } from '@angular/material';
import { AddActionsComponent } from './add-actions/add-actions.component';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class EventListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['id', 'app', 'defectSeverity', 'condition', 'threshold', 'severity', 'action', 'solution', 'description', 'edit'];
public events;
_Critical: String = 'critical';
_Warning: String = 'warning';
_Error: String = 'error';
  constructor(private eventService: EventsService,
    private dialog: MatDialog,
    private newAction: AddActionsComponent) { }
  ngOnInit() {
   // this.eventService.getPosts().subscribe(data => this.events = data);
   this.eventService.getPosts().subscribe(data => {
    if (!data) {
      return;
    }
   // this.events = data;
    this.events = new MatTableDataSource(data);
    this.events.sort = this.sort;
    this.events.paginator = this.paginator;
  });
  }
  OnAdd() {
    // this.ser
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '65%';
    dialogConfig.height = '85%';
    this.dialog.open(AddActionsComponent, dialogConfig);
   }
}
