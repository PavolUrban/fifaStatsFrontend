import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexPlotOptions, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { GoalDistributonModel } from '../../models/goal-distribution.model';

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
 
  @Input() goalDistributionModel: GoalDistributonModel;
  
  @ViewChild("chart") chart: ChartComponent;
  displayChart = false;
  public chartOptions: Partial<ChartOptions>;

  constructor() { }

  ngOnInit(){}

  ngOnChanges(){
    if(this.goalDistributionModel) {
      this.createChart();
    }
  }

  createChart(): void {

    let unknownTimeGoalsLabel = "This team has scored " + this.goalDistributionModel.scoredGoalsUnknownTime + " and conceded " + this.goalDistributionModel.concededGoalsUnknownTime + " goals(s) in unknown time." ;
   
     this.chartOptions = {
      series: [
        {
          name: "Conceded",
          data: this.goalDistributionModel.concededGoalsList
        },
        {
          name: "Scored",
          data: this.goalDistributionModel.scoredGoalsList
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
        categories: this.goalDistributionModel.minutesAsLabels
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
