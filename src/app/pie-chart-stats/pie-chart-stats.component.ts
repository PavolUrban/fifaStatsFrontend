import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApexNonAxisChartSeries, ApexChart, ApexResponsive, ChartComponent, ApexTitleSubtitle } from 'ng-apexcharts';


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle,
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-pie-chart-stats',
  templateUrl: './pie-chart-stats.component.html',
  styleUrls: ['./pie-chart-stats.component.scss']
})
export class PieChartStatsComponent implements OnInit, OnChanges {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  @Input() series : Array<number>;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.createChart();
  }

  ngOnInit() { }

  createChart(): void{
    this.chartOptions = {
      series: this.series,
      chart: {
        type: "donut"
      },
      title: {
        text: "Number of wins"
      },
      labels: ["Wins", "Draws", "Losses"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

}
