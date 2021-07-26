import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company-model';
import { Exchange } from 'src/app/models/exchange-model';
import { StockPrice } from 'src/app/models/stock-price-model';
import { AuthService } from 'src/app/services/auth.service';
import { CompanyService } from 'src/app/services/company.service';
import { ExchangeService } from 'src/app/services/exchange.service';
import { StockPriceService } from 'src/app/services/stock-price.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {

  public state:string;
  public stockPrices:StockPrice[][];
  public companies:Company[];
  public exchanges:Exchange[];
  public companyTitle:string;
  public exchangeTitle:string;
  public companySelected:Company;
  public exchangeSelected:Exchange;
  public fromTime:string;
  public toTime:string;

  highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor(private authService:AuthService, private companyService:CompanyService, private exchangeService:ExchangeService, private stockPriceService:StockPriceService) {
    this.state="";
    this.stockPrices = [];
    this.companyTitle="Please choose a company";
    this.exchangeTitle="Please choose a stock exchange";
    this.companies=[];
    this.exchanges=[];
    this.fromTime="";
    this.toTime="";
    this.companySelected = {
      "id": 0,
      "name": "",
      "turnover": 0,
      "ceo": "",
      "brief": "",
      "bod": "",
      "sector": {
          "id": 0,
          "name": "",
          "brief": ""
      }
    }
    this.exchangeSelected = {
      "id": 0,
      "name": "",
      "brief": "",
      "remarks": "",
      "address": {
          "id": 0,
          "street": "",
          "city": "",
          "country": "",
          "zipCode": 0
      }
    }

    this.chartOptions = {
      title: {
        text: "Stock Value Comparison"
      },
      xAxis: {
        labels: {
          formatter: function () {
            var label = this.axis.defaultLabelFormatter.call(this).replace(" ","").replace("k","000").replace(" ","").replace(" ","").replace("M", "000000");
            var date: Date = new Date(parseInt(label));
            return date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+"\n"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
          }
        }
      },
      yAxis: {
        title: {
          text: "Stock Price"
        }
      },
      series: [],
      legend: {
        title: {
            text: 'Stock<br/><span style="font-size: 9px; color: #666; font-weight: normal">(Click to hide)</span>',
            style: {
                fontStyle: 'italic'
            }
        },
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -10,
        y: 100
      }
    }

  }

  ngOnInit(): void {
    this.state = this.authService.getCurrentUserRole();
    this.companyService.getAllCompanies().subscribe(companies => {
      this.companies = companies;
    });
    this.exchangeService.getAllExchanges().subscribe(exchanges => {
      this.exchanges = exchanges;
    });
  }

  onCompanyClick(company:Company){
    this.companyTitle = company.name;
    this.companySelected = company;
  }

  onExchangeClick(exchange:Exchange){
    this.exchangeTitle = exchange.name;
    this.exchangeSelected = exchange;
  }

  onSubmit(){
    this.fromTime+= ".000+05:30";
    this.toTime+= ".000+05:30";
    this.stockPriceService.getStockPrices(this.companySelected.id, this.exchangeSelected.id, this.fromTime, this.toTime).subscribe( stockPrices => {
      if(stockPrices.length){
        this.stockPrices[this.stockPrices.length] = stockPrices;
        console.log(this.stockPrices);
        this.chartOptions.series?.push(this.getPriceSeries(stockPrices));
        Highcharts.chart('chart-container', this.chartOptions);
      } else{
        alert("No data found for the requested period");
      }
    })
    this.onReset();
  }

  onReset(){
    this.companySelected = {
      "id": 0,
      "name": "",
      "turnover": 0,
      "ceo": "",
      "brief": "",
      "bod": "",
      "sector": {
          "id": 0,
          "name": "",
          "brief": ""
      }
    }
    this.exchangeSelected = {
      "id": 0,
      "name": "",
      "brief": "",
      "remarks": "",
      "address": {
          "id": 0,
          "street": "",
          "city": "",
          "country": "",
          "zipCode": 0
      }
    }
    this.companyTitle='Please choose a company';
    this.exchangeTitle='Please choose a stock exchange';
  }

  getPriceSeries(stockPrices: StockPrice[]):Highcharts.SeriesOptionsType{
    var seriesData: number[][] = [];
    for(var i=0;i<stockPrices.length;i++){
      seriesData[i] = [new Date(stockPrices[i].timestamp).valueOf(), stockPrices[i].price];
    }
    return {
      name: stockPrices[0].stock.stockCode,
      data: seriesData,
      type: "line"
    }
  }

}
