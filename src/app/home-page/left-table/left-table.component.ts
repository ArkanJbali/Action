import { HomePageService } from './../../Service/home-page.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-left-table',
  templateUrl: './left-table.component.html',
  styleUrls: ['./left-table.component.css']
})
export class LeftTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
 // @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns3 = ['severity', 'sevCount', 'sevPercentage'];
  bySevData;
  _Critical: String = 'critical';
  _Warning: String = 'Warning';
  _Error: String = 'Error';
  constructor(private homeService: HomePageService) { }

  ngOnInit() {
    this.homeService.getSev().subscribe(results => {
      if (!results) {
        return;
      }
      this.bySevData = new MatTableDataSource(results);
      this.bySevData.sort = this.sort;
      // this.bySevData.paginator = this.paginator;
    });
  }

}
