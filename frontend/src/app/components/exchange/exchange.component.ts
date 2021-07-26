import { Component, OnInit } from '@angular/core';
import { Exchange } from 'src/app/models/exchange-model';
import { AuthService } from 'src/app/services/auth.service';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  public state:string;
  public exchanges:Exchange[];

  constructor(private authService:AuthService, private exchangeService:ExchangeService) {
    this.state="";
    this.exchanges=[];
  }

  ngOnInit(): void {
    this.state = this.authService.getCurrentUserRole();
    this.exchangeService.getAllExchanges().subscribe( allExchanges => {
      this.exchanges = allExchanges;
    });
  }

}
