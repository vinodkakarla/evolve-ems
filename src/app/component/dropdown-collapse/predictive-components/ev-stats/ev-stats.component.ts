import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid,
  ApexPlotOptions
} from 'ng-apexcharts';

export type salesChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: any;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: any;
  grid: ApexGrid;
  plotOptions: ApexPlotOptions
};

@Component({
  selector: 'app-ev-stats',
  templateUrl: './ev-stats.component.html'
})
export class EVStatsComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public salesChartOptions: Partial<salesChartOptions>;
  constructor() {
    this.salesChartOptions = {
      series: [
        {
          name: "Uptime",
          data: [20, 19, 8, 18, 18, 19, 19, 5, 17, 20, 19, 16],
        },
        {
          name: "Alerts",
          data: [5, 7, 40, 6, 8, 2, 1, 60, 9, 1, 1, 3],
        },
      ],
      chart: {
        fontFamily: 'Rubik,sans-serif',
        height: 265,
        type: 'bar',
        toolbar: {
          show: false
        },
        stacked: false,
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
          barHeight: '70%',
          borderRadius: 3,
        },
      },
      colors: ["#0d6efd", "#FF0005", "#6771dc"],
      stroke: {
        show: true,
        width: 4,
        colors: ["transparent"],
      },
      grid: {
        strokeDashArray: 3,
      },
      markers: {
        size: 3
      },
      xaxis: {
        categories: [
          "EVC1",
          "EVC2",
          "EVC3",
          "EVC4",
          "EVC5",
          "EVC6",
          "EVC7",
          "EVC8",
          "EVC9",
          "EVC10",
          "EVC11",
          "EVC12"
        ],
      },
      tooltip: {
        theme: 'dark'
      }
    };
  }

  ngOnInit(): void {
  }

}
