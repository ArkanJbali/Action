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
  private _page = 1;
  private selectedNum = 5;
  private index: number;
  ActionLogData;
  byAppData;
  bySevData;
  _Critical: String = 'Critical';
  _Warning: String = 'Warning';
  _Error: String = 'Error';
  constructor(private homeService: HomePageService) { }

  ngOnInit() {
    this.homeService.getPostsL(this.selectedNum , this._page).subscribe(results => {
      if (!results) {
        return;
      }
      this.ActionLogData = new MatTableDataSource(results);
      this.ActionLogData.sort = this.sort;
      this.ActionLogData.paginator = this.paginator;
    });
  }
  onFirsts(): void {
    this._page = 1;
    this.homeService.getPostsL(this.selectedNum , this._page).subscribe(results => {
      if (results.length === 0) {
        return;
      } else {
        this.ActionLogData = new MatTableDataSource(results);
        this.ActionLogData.sort = this.sort;
        this.ActionLogData.paginator = this.paginator;
      }
    });
  }

  onPrevious(): void {
    this._page--;
    this.homeService.getPostsL(this.selectedNum , this._page).subscribe(results => {
     if (results.length === 0 || this._page === 0) {
      this._page++;
       return;
     } else {
      this.ActionLogData = new MatTableDataSource(results);
      this.ActionLogData.sort = this.sort;
      this.ActionLogData.paginator = this.paginator;
     }
   });
  }

  onNext(): void {
    this._page++;
    this.homeService.getPostsL(this.selectedNum , this._page).subscribe(results => {
      if (results.length === 0) {
        this._page--;
        return;
      } else {
      this.ActionLogData = new MatTableDataSource(results);
      this.ActionLogData.sort = this.sort;
      this.ActionLogData.paginator = this.paginator;
      }
    });
  }
  onlast(): void {
    this.homeService.getEventInsCounter().subscribe(counter => {
      if (counter.length === 0) {
        return;
      } else {
        // console.log(counter);
         this.index = (+counter - (+counter % this.selectedNum));
        this.index = (( this.index / this.selectedNum ) + 1 );
        console.log(this.index);
        this._page = this.index;
        this.homeService.getPostsL(this.selectedNum , this._page).subscribe(results => {
          if (!results) {
            return;
          }
          this.ActionLogData = new MatTableDataSource(results);
          this.ActionLogData.sort = this.sort;
          this.ActionLogData.paginator = this.paginator;
        });
      }
    });
  }

  selectChangeHandler (event: any) {
    this.selectedNum = event.target.value;
    this.homeService.getPostsL( this.selectedNum , 1).subscribe(results => {
      if (results.length === 0) {
        return;
      } else {
     // this.events = data;
     this.ActionLogData = new MatTableDataSource(results);
     this.ActionLogData.sort = this.sort;
     this.ActionLogData.paginator = this.paginator;
      }
    });
  }

}
