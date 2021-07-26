import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public state:string

  constructor(private authService:AuthService) {
    this.state = "unauthorized";
   }

  ngOnInit(): void {
  }

}
