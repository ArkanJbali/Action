import { Component, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/Service/home-page.service';
@Component({
selector: 'app-pie-chart',
templateUrl: './pie.component.html',
styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
byAppData = [];
bySevData;
s = '';
// ITS READ NULL FIRST NOT THE FOR LOOP INSIDE ONINIT
 public okk = false;
 public pieColor = [];

 public pieChartLabels = [];
 public pieChartData = [];
 public pieChartType = 'pie';
 public pieChartOptions = [
   {
     backgroundColor: this.pieColor,
     responsive: true
   }];
 // events on slice click
 public chartClicked(e: any): void {
  // console.log(e);
 }

// event on pie chart slice hover
 public chartHovered(e: any): void {
  // console.log(e);
 }
public  getRandomColor() {
   const colored = Math.floor(0x1000000 * Math.random()).toString(16);
   return '#' + ('000000' + colored).slice(6);
 }
constructor(private homeService: HomePageService ) {}


ngOnInit() {

  this.homeService.getApp().subscribe(appData => {
    if (!appData) {
      return;
    }
    this.byAppData = appData;
    for (let i = 0; i < this.byAppData.length; i++) {
     this.pieChartLabels[i] = this.byAppData[i].appName;
   //  console.log('pieChart appData: ' + i + ' ' + this.pieChartLabels[i]);
     this.pieChartData[i] = +Number(this.byAppData[i].appCount);
   //  console.log('pieChart appData: ' + i + ' ' + this.byAppData[i].appCount);
    }
   //  console.log('pieChart appData: ' + JSON.stringify(appData));
   //  // appData.forEach(i =>  this.byAppData.push(i));
   //  console.log('pieChart this.byAppData' + JSON.stringify(this.byAppData));
   //  // this.byAppData.forEach(i => this.pieChartLabels.push(i.appName));
   //  console.log('pieChart appNames: ' + this.pieChartLabels);
    for (let i = 0; i < this.pieChartLabels.length; i++) {
      // this.pieColor[i] = this.getRandomColor();
      this.pieColor[i] = this.getRandomColor();
    }
   //   console.log('pie color: ' + this.pieColor);
   //  // this.byAppData.forEach(i => this.pieChartData.push(i.appCount));
   //  console.log('appCount: ' + this.pieChartData);
    this.okk = true;
  });
}
}
