import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() public state:string;
  public currentPage:string;

  constructor(private authService:AuthService, private router:Router) {
    this.state = "";
    this.currentPage = router.url;
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.authenticate("unauth","unauth");
    this.router.navigate(["/"]);
    if(this.currentPage==="/"){
      location.reload();
    }
  }

}
