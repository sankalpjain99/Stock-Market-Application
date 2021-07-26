import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company-model';
import { Sector } from 'src/app/models/sector-model';
import { AuthService } from 'src/app/services/auth.service';
import { CompanyService } from 'src/app/services/company.service';
import { SectorService } from 'src/app/services/sector.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  public state:string;
  public company:Company;
  public sectors:Sector[];
  public dropDownTitle:string;

  constructor(private authService:AuthService, private sectorService:SectorService, private companyService:CompanyService, private router: Router) {
    this.state="";
    this.sectors=[];
    this.dropDownTitle="Please Choose a Sector"
    this.company = {
      "id":0,
      "name": "",
      "turnover": 0,
      "ceo": "",
      "brief": "",
      "bod": "",
      "sector": {
          id:0,
          name:"",
          brief:""
      }
    }
  }

  ngOnInit(): void {
    this.state = this.authService.getCurrentUserRole();
    this.sectorService.getAllSectors().subscribe( sectors => {
      this.sectors=sectors;
    })
  }

  addCompany(){
    if(this.dropDownTitle == "Please Choose a Sector"){
      alert("Please choose a sector");
    } else{
      console.log(this.company);
      this.companyService.addCompany(this.company).subscribe(addedCompany => {
        console.log(addedCompany);
      })
      this.router.navigate(['/company']);
    }
  }

  onSectorClick(sector:Sector){
    this.dropDownTitle = sector.name;
    this.company.sector = sector;
  }

}
