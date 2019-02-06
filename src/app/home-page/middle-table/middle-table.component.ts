import { HomePageService } from './../../Service/home-page.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-middle-table',
  templateUrl: './middle-table.component.html',
  styleUrls: ['./middle-table.component.css']
})
export class MiddleTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['id', 'eventName', 'severity', 'description', 'Solution'];
  ActionLogData;
  byAppData;
  bySevData;
  _Critical: String = 'critical';
  _Warning: String = 'Warning';
  _Error: String = 'Error';
  constructor(private homeService: HomePageService) { }

  ngOnInit() {
    this.homeService.getPosts().subscribe(results => {
      if (!results) {
        return;
      }
      this.ActionLogData = new MatTableDataSource(results);
      this.ActionLogData.sort = this.sort;
      this.ActionLogData.paginator = this.paginator;
    });
  }

}
