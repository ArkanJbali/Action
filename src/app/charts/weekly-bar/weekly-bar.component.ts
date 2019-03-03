import { Component, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/Service/home-page.service';

@Component({
  selector: 'app-weekly-bar',
  templateUrl: './weekly-bar.component.html',
  styleUrls: ['./weekly-bar.component.css']
})
export class WeeklyBarComponent implements OnInit {

  bySevWkData;
  public ookk = false;
  public weeklyChartLabels = []; // : string[] = ['WEEK1', 'WEEK2', 'WEEK3', 'WEEK4', 'WEEK5', 'WEEK6'];
  public weeklyChartData: any = [
      { data: [], // 67, 10, 14, 95, 33, 26],
        per: [], // '17%', '20%', '15%', '78%', '33%', '26%'],
        label: 'Critical'
      },
      { data: [], // 20, 39, 70, 19, 45, 60],
        per: [], // '20%', '5%', '48%', '7%', '50%', '45%'],
        label: 'Warning'
      },
      { data: [], // 11, 60, 16, 34, 25, 18],
        per: [], // '13%', '66%', '5%', '15%', '83%', '34%'],
        label: 'Error'
      }
    ];

  public weeklyChartOptions: any = {
    scales: {
      xAxes: [{ stacked: true}],
      yAxes: [{ stacked: true}]
    },
    tooltips: {
      callbacks: {
        label: this.weeklyToolTip
    }
  }
  };

  public weeklyChartType = 'bar';
  public weeklyChartLegend = true;
  constructor( private homeService: HomePageService ) { }
  ngOnInit() {
    this.homeService.getWeeklySev().subscribe(SevWkData => {
      if (!SevWkData) {
        return;
      }
      this.bySevWkData = SevWkData;
    for ( let i = 0; i < this.bySevWkData.length; i++) {
      this.weeklyChartLabels[i] = this.bySevWkData[i].week;
      if (this.bySevWkData[i].critical) {
        this.weeklyChartData[0].data[i] = this.bySevWkData[i].critical;
      } else {
        this.weeklyChartData[0].data[i] = 0;
      }
      if (this.bySevWkData[i].warning) {
        this.weeklyChartData[1].data[i] = this.bySevWkData[i].warning;
      } else {
        this.weeklyChartData[1].data[i] = 0;
      }
      if (this.bySevWkData[i].error) {
        this.weeklyChartData[2].data[i] = this.bySevWkData[i].error;
      } else {
        this.weeklyChartData[2].data[i] = 0;
      }
    }
    // console.log('this.weeklyChartLabels: ' + JSON.stringify(this.weeklyChartLabels));
    // console.log('this.weeklyChartData: ' + JSON.stringify(this.weeklyChartData));

    for ( let i = 0; i < this.bySevWkData.length; i++) {
      let total = 0; let per0 = 0; let per1 = 0; let per2 = 0;
      total += Number(this.weeklyChartData[0].data[i]);
      total += Number(this.weeklyChartData[1].data[i]);
      total += Number(this.weeklyChartData[2].data[i]);
      // console.log(total, 'total');
      per0 = (100 * Number(this.weeklyChartData[0].data[i]) / total),
      this.weeklyChartData[0].per[i] = per0.toFixed(2);
      per1 = (100 * Number(this.weeklyChartData[1].data[i]) / total),
      this.weeklyChartData[1].per[i] = per1.toFixed(2);
      per2 = (100 * Number(this.weeklyChartData[2].data[i]) / total),
      this.weeklyChartData[2].per[i] = per2.toFixed(2);
    }
    // console.log('percentage is: ' + this.weeklyChartData[0].per[1]);
    // console.log('this.weeklyChartData: ' + JSON.stringify(this.weeklyChartData));
    // this.tests2 = this.tests.split('.') ;
    this.ookk = true;
    });
  }
  public chartClicked(e: any): void {
  //  console.log(e);
  }

 // event on pie chart slice hover
  public chartHovered(e: any): void {
  //  console.log(e);
  }

  public  getRandomColor() {
    const colored = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + colored).slice(6);
  }

  public weeklyToolTip(tooltipItem, items) {
    return (
      items.datasets[tooltipItem.datasetIndex].label + ': ' +
      items.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + ' is ' +
      items.datasets[tooltipItem.datasetIndex].per[tooltipItem.index] + '%'
    );
    }
}
