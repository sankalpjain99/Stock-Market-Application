import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public state:string;

  constructor(private authService:AuthService) {
    this.state=authService.getCurrentUserRole();
  }

  ngOnInit(): void {
  }

}
