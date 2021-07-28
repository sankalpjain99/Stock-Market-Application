import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company-model';
import { Exchange } from 'src/app/models/exchange-model';
import { Stock } from 'src/app/models/stock-model';
import { AuthService } from 'src/app/services/auth.service';
import { CompanyService } from 'src/app/services/company.service';
import { ExchangeService } from 'src/app/services/exchange.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  public state:string;
  public stock:Stock;
  public companies:Company[];
  public exchanges:Exchange[];
  public companyTitle:string;
  public exchangeTitle:string;

  constructor(private authService:AuthService, private companyService:CompanyService, private exchangeService:ExchangeService, private router: Router) {
    this.state="";
    this.companyTitle="Please choose a company";
    this.exchangeTitle="Please choose a stock exchange";
    this.stock={
      "id": 0,
      "stockCode": "",
      "company": {
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
      },
      "stockExchange": {
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
    }
    this.companies=[];
    this.exchanges=[];
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
    this.stock.company = company;
  }

  onExchangeClick(exchange:Exchange){
    this.exchangeTitle = exchange.name;
    this.stock.stockExchange = exchange;
  }

  addStock(){
    this.companyService.addStock(this.stock).subscribe( addedStock => {
      console.log(addedStock);
    })
    this.router.navigate(['/exchange']);
  }

  onReset(){
    this.stock={
      "id": 0,
      "stockCode": "",
      "company": {
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
      },
      "stockExchange": {
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
    }
    this.companyTitle='Please choose a company';
    this.exchangeTitle='Please choose a stock exchange';
  }

}
