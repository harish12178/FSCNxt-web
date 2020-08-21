import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Router } from '@angular/router';

export interface Status {
  transid: string;
  truck: string;
}
const array: Status[] = [
  { transid: "EN-CK-2006007", truck: "KA 51 AA 1234" },
  { transid: "EN-CK-2006007", truck: "KA 51 AA 1234" }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  chart;
  data_arr = [10, 40, 20, 30];
  labels = ["Pending", "Open", "Scheduled", "In Progress"];


  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Scheduled Delivery' },
    { data: [40, 56, 73, 92, 37, 25, 50], label: 'Actual Delivery' },
  ];
  public lineChartLabels: Label[] = ['30', '40', '50', '60', '70', '80', '90'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        { gridLines: { display: false } }

      ],
      yAxes: [
        {
          display: true,
          ticks: {
            max: 100,
            min: 0,
            stepSize: 50
          }
        }
      ]
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#e46c53',
      backgroundColor: 'transparent',
      pointBorderColor:'transparent',
        borderWidth:3.5
    },
    {
      borderColor: '#3991dc',
      backgroundColor: 'transparent',
      pointBorderColor:'transparent',
        borderWidth:3.5
    },
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  displayedColumns: string[] = ['transid', 'truck', 'call', 'status', 'alert', 'track'];
  dataSource = array;

  constructor(private router: Router) { }

  handle_dashboard1() {
    this.router.navigate(['/dashboard1']);
  }

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [
          {
            borderWidth: 0,
            data: this.data_arr,
            backgroundColor: [
              "#40ed9a",
              "#fb863a",
              "#40a8e2",
              "#485865"
            ],
            fill: true
          }
        ]
      },
      options: {

        cutoutPercentage: 78,

        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }],
        }
      }
    });

  }

}
