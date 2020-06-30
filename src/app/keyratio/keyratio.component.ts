import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyratio',
  templateUrl: './keyratio.component.html',
  styleUrls: ['./keyratio.component.scss']
})
export class KeyratioComponent implements OnInit {
  public chartType: string = 'bar';

  public chartDatasets1: Array<any> = [{ data: [5.25,5.57,6.40,13.70,25], label: 'ROE (%)' }];
  public chartDatasets2: Array<any> = [{ data: [5.16,5.57,6.47,13.67,25], label: 'ROCE (%)' }];
  public chartDatasets3: Array<any> = [{ data: [16169,18418.36,26473.13,51501.73,102058.55], label: 'Total Income' }];
  public chartDatasets4: Array<any> = [{ data: [549.3,931.97,1198.66,2409.86,6032.17], label: 'Operating Profit' }];
  public chartDatasets5: Array<any> = [{ data: [272.48,306.54,442.6,1234.14,3138.26], label: 'Profit after Tax' }];
  public chartDatasets6: Array<any> = [{ data: [10.39,11.01,12.81,17.04,23.66], label: 'Book Value' }];

  public chartLabels: Array<any> = [2015,2016,2017,2018,2019];

  public chartColors1: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 2,
    }
  ];
  public chartColors2: Array<any> = [
    {
      backgroundColor: [
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255,99,132,1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 2,
    }
  ];
  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  constructor() { }





  public chartTypel: string = 'line';

  public chartDatasetsl1: Array<any> = [{ data: [3.39,3.20,3.13,3.80,5.32], label: 'Operating Margin (%)' }, ]
  public chartDatasetsl2: Array<any> = [{ data: [1.68,1.60,1.67,2.41,3.07], label: 'Net Profit Margin (%)' }, ]

  public chartLabelsl: Array<any> = [2015,2016,2018,2019];
  public chartColorsl1: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
  ];
  public chartColorsl2: Array<any> = [
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptionsl: any = {
    responsive: true
  };
  public chartClickedl(e: any): void { }
  public chartHoveredl(e: any): void { }

  ngOnInit(): void {
  }

}
