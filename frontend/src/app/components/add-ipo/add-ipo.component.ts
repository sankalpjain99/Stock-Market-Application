import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company-model';
import { Exchange } from 'src/app/models/exchange-model';
import { Ipo } from 'src/app/models/ipo-model';
import { AuthService } from 'src/app/services/auth.service';
import { CompanyService } from 'src/app/services/company.service';
import { ExchangeService } from 'src/app/services/exchange.service';
import { IpoService } from 'src/app/services/ipo.service';

@Component({
  selector: 'app-add-ipo',
  templateUrl: './add-ipo.component.html',
  styleUrls: ['./add-ipo.component.css']
})
export class AddIpoComponent implements OnInit {

  public state:string
  public ipo:Ipo;
  public companies:Company[];
  public exchanges:Exchange[];
  public companyTitle:string;
  public exchangeTitle:string;

  constructor(private authService:AuthService, private companyService:CompanyService, private exchangeService:ExchangeService, private ipoService:IpoService) {
    this.state="";
    this.ipo={
      "id": 0,
      "pricePerShare": 0,
      "totalShares": 0,
      "dateTime": new Date(),
      "remarks": "",
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
    this.companyTitle="Please choose a company";
    this.exchangeTitle="Please choose a stock exchange";
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
    this.ipo.company = company;
  }

  onExchangeClick(exchange:Exchange){
    this.exchangeTitle = exchange.name;
    this.ipo.stockExchange = exchange;
  }

  addStock(){
    var date: string = this.ipo.dateTime+":00.000+05:30";
    this.ipo.dateTime = new Date(date);
    console.log(this.ipo);
    this.ipoService.addIpo(this.ipo).subscribe( addedIpo => {
      console.log(addedIpo);
    })
  }

  onReset(){
    this.ipo={
      "id": 0,
      "pricePerShare": 0,
      "totalShares": 0,
      "dateTime": new Date(),
      "remarks": "",
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
