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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns3 = ['Severity', 'SevNum', 'Def'];
  bySevData;
  _Critical: String = 'critical';
  _Warning: String = 'Warning';
  _Error: String = 'Error';
  constructor(private homeService: HomePageService) { }

  ngOnInit() {
    this.homeService.getSev().subscribe(results3 => {
      if (!results3) {
        return;
      }
      this.bySevData = new MatTableDataSource(results3);
      this.bySevData.sort = this.sort;
      this.bySevData.paginator = this.paginator;
    });
  }

}
