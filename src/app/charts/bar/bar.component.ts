import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  public okk = false;
  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['BLM-Core', 'BLM-Custom', 'CM-Core', 'CM-custom', 'JF-Core', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Critical'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Error'},
    {data: [15, 30, 20, 2, 100, 0, 10], label: 'Warning'}
  ];
  ngOnInit() {
    this.okk = true;
  }

}
