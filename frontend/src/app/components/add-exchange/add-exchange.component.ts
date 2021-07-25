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
      "name":"New York State Exchange",
      "brief": "Brief 3",
      "address":{
          "street": "Wall Street",
          "city": "New York",
          "country": "United States of America",
          "zipCode": 10005
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
