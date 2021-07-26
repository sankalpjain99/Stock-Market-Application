import { Component, OnInit } from '@angular/core';
import { Exchange } from 'src/app/models/exchange-model';
import { AuthService } from 'src/app/services/auth.service';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-add-exchange',
  templateUrl: './add-exchange.component.html',
  styleUrls: ['./add-exchange.component.css']
})
export class AddExchangeComponent implements OnInit {

  public state:string;
  public exchange:Exchange;

  constructor(private authService:AuthService, private exchangeService:ExchangeService) {
    this.state="";
    this.exchange={
      "id":0,
      "name":"",
      "brief": "",
      "address":{
          "street": "",
          "city": "",
          "country": "",
          "zipCode": 0
      },
      "remarks":"Remark 3"
    }
  }

  ngOnInit(): void {
    this.state = this.authService.getCurrentUserRole();
  }

  addExchange(){
    this.exchangeService.addExchange(this.exchange).subscribe(exchange => {
      console.log("Exchange Added");
      console.log(exchange);
    });
  }

}
