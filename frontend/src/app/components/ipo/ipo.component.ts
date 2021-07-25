import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company-model';
import { Ipo } from 'src/app/models/ipo-model';
import { AuthService } from 'src/app/services/auth.service';
import { CompanyService } from 'src/app/services/company.service';
import { IpoService } from 'src/app/services/ipo.service';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {

  public state:string;
  public ipos:Ipo[];
  public allIpos:Ipo[];
  public dropDownTitle:string;
  public currentCompany:Company;

  constructor(private authService:AuthService, private ipoService:IpoService) {
    this.state="";
    this.ipos=[];
    this.allIpos=[];
    this.dropDownTitle = "Please select company";
    this.currentCompany = {
      id:0,
      name:'',
      turnover:0,
      ceo:'',
      brief:'',
      bod:'',
      sector:{
        "id": 0,
      "name": "",
      "brief":""
      }
    }
  }

  ngOnInit(): void {
    this.state = this.authService.getCurrentUserRole();
    this.getAllIpos();
  }

  public getAllIpos(){
    this.ipoService.getAllIpos().subscribe( allIpos => {
      console.log(this.ipos);
      this.ipos = allIpos;
      this.allIpos = allIpos;
    });
  }

  onCompanyClick(company:Company){
    this.currentCompany = company;
    this.dropDownTitle = company.name;
  }

  onLoadComapnies(){
    if(this.dropDownTitle==="Please select company"){
      alert("Please select a Company");
    } else{
      this.ipoService.getIpoByCompany(this.currentCompany.id).subscribe( ipo => {
        this.ipos=[];
        this.ipos.push(ipo);
      })
    }
  }

  public clearFilter(){
    this.dropDownTitle = "Please select company";
    this.getAllIpos();
  }

}
