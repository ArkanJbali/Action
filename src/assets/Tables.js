/*
 *@Author Arkan Jbali
 *
 */

function showDate(){
var d = new Date();
var s=+d.getDate()+"/"+(d.getMonth() + 1)+"/"+d.getFullYear();
//document.getElementById('date').innerHTML = s;
document.getElementById('date2').innerHTML = s;
// MiddleT();
// ByApp();
// BySev();
// z();
// vertical();
// showWeekly()
}
// Chart.defaults.global.defaultFontColor = 'white';
var config = {
		type: 'pie',
		data: {
		datasets: [{
				data: [
					40,
					6,
					4,
					1,
					1
				],
				backgroundColor: [
					'rgb(255, 99, 132)',
	                'rgb(54, 162, 235)',
	                'rgb(255, 206, 86)',
	                'rgb(75, 192, 192',
	                'rgb(153, 102, 255)'
				],
				label: 'Dataset 1'
			}],
			labels: [
				'BLM1',
				'JF1',
				'CM1',
				'F3',
				'F4'
			]
		},
		options: {
			responsive: true,
			title: {
		        display: true,
		        text: 'Actions by app Pie'
		      }
		}
	};

	 function z() {
		var ctx = document.getElementById('chart-area').getContext('2d');
		window.myPie = new Chart(ctx, config);
	};


actions=[
	{SeqID:1,Title:"zDB connection",Severity:"iconC",Description:"some error",Solution:"sol"},
	{SeqID:2,Title:"Logical error",Severity:"iconW",Description:"some error",Solution:"sol"},
	{SeqID:3,Title:"Missing parameter",Severity:"iconW",Description:"some error",Solution:"sol"}
	];
	function MiddleT(){
		var s="<caption>Action Log</caption><tr><th>SeqID<th>Net. title <i class='fa fa-sort' style='font-size:14px;color:#f49841' onclick='OrderActionTitle();'></i><th>Severity <i class='fa fa-sort' style='font-size:14px;color:#f49841' onclick='OrderActionSev();'></i><th>Description<th>Solution";
		for(i=0;i<actions.length;i++){
			s+="<tr><td>"+actions[i].SeqID;
			s+="<td>"+actions[i].Title;
			s+="<td>"+actions[i].Severity;
			s+="<td>"+actions[i].Description;
			s+="<td>"+actions[i].Solution;
		}
		l=document.getElementById('t1').innerHTML=s;
	}
	app = [
		{App:"CGN Cus", Defnum:112,Def:40},
		{App:"BLM Cus", Defnum:73,Def:27},
		{App:"CMN Cus", Defnum:41,Def:15},
	];
	function OrderActionSev(){
		actions.sort(function(a,b) {
			  if (a.Severity < b.Severity)
				    return -1;
				  if (a.Severity > b.Severity)
				    return 1;
				  return 0;
				});
		MiddleT();
	}
	function OrderActionTitle(){
		actions.sort(function(a,b) {
			  if (a.Title < b.Title)
				    return -1;
				  if (a.Title > b.Title)
				    return 1;
				  return 0;
				});
		MiddleT();
	}
	function ByApp(){
		var s="<caption>Actions By app</caption><tr><th>App Name<th>Action num <i class='fa fa-sort' style='font-size:14px;color:#f49841' onclick='OrderActionNum();'></i><th>Def";
		for(i=0;i<app.length;i++){
			s+="<tr><td>"+app[i].App;
			s+="<td>"+app[i].Defnum;
			s+="<td>"+app[i].Def;
		}
		l=document.getElementById('t2').innerHTML=s;
	}
	function OrderActionNum(){
		app.sort(function(a,b) {
			  if (a.Defnum < b.Defnum)
				    return -1;
				  if (a.Defnum > b.Defnum)
				    return 1;
				  return 0;
				});
		ByApp();
	}
	sev = [
		{Severity:"iconC", Defnum:112,Def:40},
		{Severity:"iconW", Defnum:73,Def:27},
		{Severity:"iconE", Defnum:41,Def:15},
	];

	function BySev(){
		var s="<caption>Actions By Severity</caption><tr><th>App Name<th>Action num <i class='fa fa-sort' style='font-size:14px;color:#f49841' onclick='OrderActionNum2();'></i><th>Def <i class='fa fa-sort' style='font-size:14px;color:#f49841' onclick='OrderActionDef2();'></i>";
		for(i=0;i<sev.length;i++){
			s+="<tr><td>"+sev[i].Severity;
			s+="<td>"+sev[i].Defnum;
			s+="<td>"+sev[i].Def;
		}
		l=document.getElementById('t3').innerHTML=s;
	}
	function OrderActionDef2(){
		sev.sort(function(a,b) {
			  if (a.Def < b.Def)
				    return -1;
				  if (a.Def > b.Def)
				    return 1;
				  return 0;
				});
		BySev();
	}
	function OrderActionNum2(){
		sev.sort(function(a,b) {
			  if (a.Defnum < b.Defnum)
				    return -1;
				  if (a.Defnum > b.Defnum)
				    return 1;
				  return 0;
				});
		BySev();
	}
	function random_rgba() {
	    var o = Math.round, r = Math.random, s = 255;
	    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
	}
			//var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			var color = Chart.helpers.color;
			var barChartData = {
				labels: ['BLM', 'CM', 'JF', 'BM', 'CLM', 'App6', 'App8'],
				datasets: [{
					label: 'Critical',
					backgroundColor: random_rgba() ,
					borderColor:random_rgba(),
					borderWidth: 1,
					data: [
						50,
						20,
						30,
						7,
						10
					]
				},{
					label: 'Error',
					backgroundColor: random_rgba() ,
					borderColor:random_rgba(),
					borderWidth: 1,
					data: [
						10,
						25,
						50,
						5,
						15
					]
				},{
					label: 'Warning',
					backgroundColor: random_rgba() ,
					borderColor: random_rgba(),
					borderWidth: 1,
					data: [
						50,
						20,
						30,
						3,
						10
					]
				}]
			};
			function vertical() {
				var ctx = document.getElementById('vertical').getContext('2d');
				window.myBar = new Chart(ctx, {
					type: 'bar',
					data: barChartData,
					options: {
						responsive: true,
						legend: {
							position: 'top'
						},
						title: {
							display: true,
							text: 'Actions By App, by Severity'
						},

					}
				});

			};

function showWeekly(){
	 // Return with commas in between
	  var numberWithCommas = function(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	  };

	var dataPack1 = [1000, 22000, 26000, 35000, 55000, 55000, 56000, 59000, 60000, 61000, 60100, 62000];
	var dataPack2 = [20000, 1200, 1300, 1400, 1060, 2030, 2070, 4000, 4100, 4020, 4030, 4050];
	var dates = ["May 1", "May 2", "May 3", "May 4", "May 5", "May 6",
	  				 "May 7", "May 8", "May 9", "May 10", "May 11", "May 12"];

	// Chart.defaults.global.elements.rectangle.backgroundColor = '#FF0000';

	var bar_ctx = document.getElementById('bar-chart');
	var bar_chart = new Chart(bar_ctx, {
	    type: 'bar',
	    data: {
	        labels: dates,
	        datasets: [
	        {
	            label: 'Bowser',
	            data: dataPack1,
							backgroundColor: "rgba(55, 160, 225, 0.7)",
							hoverBackgroundColor: "rgba(55, 160, 225, 0.7)",
							hoverBorderWidth: 2,
							hoverBorderColor: 'lightgrey'
	        },
	        {
	            label: 'Mario',
	            data: dataPack2,
							backgroundColor: "rgba(225, 58, 55, 0.7)",
							hoverBackgroundColor: "rgba(225, 58, 55, 0.7)",
							hoverBorderWidth: 2,
							hoverBorderColor: 'lightgrey'
	        },
	        ]
	    },
	    options: {
	     		animation: {
	        	duration: 10,


	        },
	        tooltips: {
						mode: 'label',
	          callbacks: {
	          label: function(tooltipItem, data) {
	          	return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
	          }
	          }
	         },
	        scales: {
	          xAxes: [{
	          	stacked: true,
	            gridLines: { display: false },
	            }],
	          yAxes: [{
	          	stacked: true,
	            ticks: {
	        			callback: function(value) { return numberWithCommas(value); },
	     				},
	            }],
	        }, // scales
	        legend: {display: true},
	        responsive: true,
			title: {
		        display: true,
		        text: 'Weekly view of actions by Severity'
		      }

	    } // options
	   }
	);
}
