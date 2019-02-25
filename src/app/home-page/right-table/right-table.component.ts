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
   private _page = 1;
  private selectedNum = 5;
  byAppData;
  displayedColumns2 = ['appName', 'appCount', 'percentage'];
  _Critical: String = 'critical';
  _Warning: String = 'Warning';
  _Error: String = 'Error';
  constructor(private homeService: HomePageService) { }

  ngOnInit() {
    this.homeService.getAppL(this.selectedNum , this._page).subscribe(results => {
      if (!results) {
        return;
      }
      this.byAppData = new MatTableDataSource(results);
      this.byAppData.sort = this.sort;
     // this.byAppData.paginator = this.paginator;
    });
  }

    onFirsts(): void {
    this._page = 1;
    this.homeService.getAppL(this.selectedNum , this._page).subscribe(results2 => {
      if (results2.length === 0) {
        return;
      } else {
        this.byAppData = new MatTableDataSource(results2);
        this.byAppData.sort = this.sort;
        this.byAppData.paginator = this.paginator;
      }
    });

  }

  onPrevious(): void {
    this._page--;
    this.homeService.getAppL(this.selectedNum , this._page).subscribe(results2 => {
     if (results2.length === 0 || this._page === 0) {
      this._page++;
       return;
     } else {
      this.byAppData = new MatTableDataSource(results2);
      this.byAppData.sort = this.sort;
      this.byAppData.paginator = this.paginator;
     }
   });

  }

  onNext(): void {
    this._page++;
    this.homeService.getAppL(this.selectedNum , this._page).subscribe(results2 => {
      if (results2.length === 0) {
        this._page--;
        return;
      } else {
        this.byAppData = new MatTableDataSource(results2);
        this.byAppData.sort = this.sort;
        this.byAppData.paginator = this.paginator;
      }
    });

  }

  selectChangeHandler (event: any) {
    this.selectedNum = event.target.value;
    this.homeService.getAppL( this.selectedNum , 1).subscribe(results => {
      if (results.length === 0) {
        return;
      } else {
     // this.events = data;
     this.byAppData = new MatTableDataSource(results);
        this.byAppData.sort = this.sort;
        this.byAppData.paginator = this.paginator;
      }
    });
  }

}
