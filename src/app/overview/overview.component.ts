import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor() { }
  elements: any = [
   {first:'ISIN',fvalue:'INE&420o1010',second:'Face Value',svalue:'Rs.10'},
   {first:'Total Income',fvalue:'Rs.1,02,058.55 Cr',second:'Basic EPS',svalue:'Rs.5.9'},
   {first:'Profit after Tax',fvalue:'Rs.3,138.26 Cr',second:'D/E',svalue:'1.01'},
   {first:'Dividend Yield',fvalue:'-',second:'Earnings Yield',svalue:'0.6%'},
   {first:'Intrinsic Value',fvalue:'Rs.90',second:'Solvency Ratio',svalue:'29.2%'},
   {first:'Total Equity',fvalue:'Rs 12587.41 Cr',second:'Reg Date',svalue:'2006'},
   {first:'Sector',fvalue:'Consumer Staples',second:'Sub-Industry',svalue:'Retail'},
   {first:'Reg Office',fvalue:'3rd Floor,court house,Lokmanya Tilak Marg,Dhobi,MUmbai-400 002',second:'Website',svalue:'www.relianceretail.com'},
 


  ];

  headElements = ['Head1','Value1',"Head2","Value2"];

  ngOnInit(): void {
  }

}
