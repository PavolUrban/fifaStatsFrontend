import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexPlotOptions, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit, OnChanges {
  @ViewChild("chart") chart: ChartComponent;

  @Input() testText: string;
  @Input() series ; //: Array<number>

  displayChart = false;

  goalsCount: Array<number> = new Array();
  public chartOptions: Partial<ChartOptions>;


  @Input() goalsRangesCounts;
  @Input() unkownTimeGoals: number;
  @Input() unknownTimeConcededGoals: number;

  constructor() { }

  ngOnInit(){}

  ngOnChanges(){

    if(this.goalsRangesCounts){
      let labels = [];
      let scoredGoalsSeries = [];
      let concededGoalsSeries = [];

      for (const [key, value] of Object.entries(this.goalsRangesCounts)) {
       labels.push(value['label']);
       scoredGoalsSeries.push(value['numberOfGoals']);
       concededGoalsSeries.push(value['numberOfConcededGoals']);
      }

      this.createChart(labels, scoredGoalsSeries, concededGoalsSeries);
    }
   
  }

  createChart(customLabels, scoredGoalsSeries, concededGoalsSeries) {

    let unknownTimeGoalsLabel = "This team has scored " + this.unkownTimeGoals + " and conceded " + this.unknownTimeConcededGoals + " goals(s) in unknown time." ;
   
     this.chartOptions = {
      series: [
        {
          name: "Conceded",
          data: concededGoalsSeries
        },
        {
          name: "Scored",
          data: scoredGoalsSeries
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        title: {
          text: unknownTimeGoalsLabel
        },
        categories: customLabels
      },
      yaxis: {
        title: {
          text: "Number of goals"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            if(val===1){
              return val + " goal scored in this range.";
            } else {
              return val + " goals scored in this range.";
            }
            
          }
        }
      }
    };

    this.displayChart = true;
    }
  
}
