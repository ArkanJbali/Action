import { EventsService } from './../Service/events.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['id', 'eventName', 'severity', 'description', 'fixAction'];
public events;
_Critical: String = 'critical';
_Warning: String = 'Warning';
_Error: String = 'Error';
  constructor(private eventService: EventsService) { }
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
}
