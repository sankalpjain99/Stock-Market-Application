import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company-model';
import { Exchange } from 'src/app/models/exchange-model';
import { Ipo } from 'src/app/models/ipo-model';
import { AuthService } from 'src/app/services/auth.service';
import { CompanyService } from 'src/app/services/company.service';
import { ExchangeService } from 'src/app/services/exchange.service';
import { IpoService } from 'src/app/services/ipo.service';
import {ActivatedRoute, Router} from "@angular/router"

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
  public companyId:number;

  constructor(private authService:AuthService, private companyService:CompanyService, private exchangeService:ExchangeService, private ipoService:IpoService, private router: Router, private activatedRoute:ActivatedRoute) {
    this.state="";
    this.companyTitle="Please choose a company";
    this.exchangeTitle="Please choose a stock exchange";
    this.companies=[];
    this.exchanges=[];
    this.companyId=this.activatedRoute.snapshot.params["id"];
    this.ipo={
      "id": 0,
      "pricePerShare": 0,
      "totalShares": 0,
      "dateTime": "",
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
  }

  ngOnInit(): void {
    this.state = this.authService.getCurrentUserRole();
    this.companyService.getAllCompanies().subscribe(companies => {
      this.companies = companies;
    });
    this.exchangeService.getAllExchanges().subscribe(exchanges => {
      this.exchanges = exchanges;
    });
    if(this.companyId){
      this.ipoService.getIpoByCompany(this.companyId).subscribe( ipo => {
        this.ipo = ipo;
        this.companyTitle = this.ipo.company.name;
        this.exchangeTitle = this.ipo.stockExchange.name;
        this.ipo.dateTime = this.ipo.dateTime.substr(0,16);
      })
    }
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
    this.ipo.dateTime = date;
    console.log(this.ipo);
    this.ipoService.addIpo(this.ipo).subscribe( addedIpo => {
      console.log(addedIpo);
    })
    this.router.navigate(['/ipo']);
  }

  onReset(){
    this.ipo={
      "id": 0,
      "pricePerShare": 0,
      "totalShares": 0,
      "dateTime": "",
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
