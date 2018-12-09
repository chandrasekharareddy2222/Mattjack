import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
    // { data: [50,82,200, 500], label:'Account D'}
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  
  constructor() { }

  ngOnInit() {
  }

  onChartClick(event) {
    console.log(event);
  }

}
