import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { HomePageService } from 'src/app/Service/home-page.service';

@Component({
  selector: 'app-right-table',
  templateUrl: './right-table.component.html',
  styleUrls: ['./right-table.component.css']
})
export class RightTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  byAppData;
  displayedColumns2 = ['AppName', 'ActionNum', 'Def'];
  _Critical: String = 'critical';
  _Warning: String = 'Warning';
  _Error: String = 'Error';
  constructor(private homeService: HomePageService) { }

  ngOnInit() {
    this.homeService.getApp().subscribe(results2 => {
      if (!results2) {
        return;
      }
      this.byAppData = new MatTableDataSource(results2);
      this.byAppData.sort = this.sort;
      this.byAppData.paginator = this.paginator;
    });
  }

}
