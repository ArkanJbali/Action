import { HomePageService } from './../../Service/home-page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  public okk = false;
  public sevChar;
  public ErrorLabel = [];
  public CriticalLabel = [];
  public WarningLabel = [];
  constructor(private homeService: HomePageService) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = []; // = ['BLM-Core', 'BLM-Custom', 'CM-Core', 'CM-custom', 'JF-Core', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [], label: 'Critical'},
    {data: [], label: 'Error'},
    {data: [], label: 'Warning'}
  ];
  ngOnInit() {
    this.homeService.getSevChart().subscribe( chartData => {
      if (!chartData) {
        return;
      }
      this.sevChar = chartData;
      for (let i = 0; i < this.sevChar.length; i++) {
        this.barChartLabels[i] = this.sevChar[i].name;
        this.ErrorLabel[i] = this.sevChar[i].err;
        this.WarningLabel[i] = this.sevChar[i].war;
        this.CriticalLabel[i] = this.sevChar[i].cri;
      }
      this.barChartData = [
        {data: this.CriticalLabel, label: 'Critical'},
        {data: this.ErrorLabel, label: 'Error'},
        {data: this.WarningLabel, label: 'Warning'}
      ];
    });
    this.okk = true;
  }

}
