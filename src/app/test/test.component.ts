import { Component, OnInit, Sanitizer, ViewChild } from '@angular/core';
import { FileService } from '../services/file.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ApexNonAxisChartSeries, ApexChart, ApexResponsive, ChartComponent, ApexTitleSubtitle } from 'ng-apexcharts';


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle,
  responsive: ApexResponsive[];
  labels: any;
};


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private fileService : FileService, private domSanitizer: DomSanitizer, private httpClient : HttpClient, private sanitiyer : Sanitizer) {
    this.chartOptions = {
      series: [7,4,1],
      chart: {
        type: "donut"
      },
      title: {
        text: "Number of leads"
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

  ngOnInit() {
  }

  selectedFile: File;
  public ImgUrl = ' ';
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }




    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {

    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/api/file/24')
      .subscribe(
        res => {
          console.log("TOto prislo");
          console.log(res['pic']);
          this.ImgUrl = 'data:image/png;base64,'+res['pic'];

        }
      );


  }


}
