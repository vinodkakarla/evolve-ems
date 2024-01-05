// import { Component, OnInit, ViewChild } from '@angular/core';
// import {
//   ApexAxisChartSeries,
//   ApexChart,
//   ChartComponent,
//   ApexDataLabels,
//   ApexYAxis,
//   ApexLegend,
//   ApexXAxis,
//   ApexTooltip,
//   ApexTheme,
//   ApexGrid,
//   ApexPlotOptions
// } from 'ng-apexcharts';

// export type salesChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   yaxis: ApexYAxis;
//   stroke: any;
//   theme: ApexTheme;
//   tooltip: ApexTooltip;
//   dataLabels: ApexDataLabels;
//   legend: ApexLegend;
//   colors: string[];
//   markers: any;
//   grid: ApexGrid;
//   plotOptions: ApexPlotOptions
// };





import { Component, OnInit, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend,
  ApexForecastDataPoints,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  forecastDataPoints: ApexForecastDataPoints;
  fill: ApexFill
};



@Component({
  selector: 'app-station-usage',
  templateUrl: './station-usage.component.html'
})
export class StationUsageComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Grid Energy",
          data: [28, 29, 33, 36, 38, 38, 38, 35, 30, 28, 27]
        },
        {
          name: "Stored Energy",
          data: [12, 11, 15, 19, 22, 30, 34, 28, 25, 21, 19]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        width: 4,
        curve: "smooth"
      },
      title: {
        text: "Average High & Low Energy Usage",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"],
        title: {
          text: "TIme"
        }
      },
      yaxis: {
        title: {
          text: "Energy Units"
        },
        min: 5,
        max: 40
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FDD835"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
    };
  }

  ngOnInit(): void {
  }

}
