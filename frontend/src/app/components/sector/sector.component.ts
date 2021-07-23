import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company-model';
import { Sector } from 'src/app/models/sector-model';
import { AuthService } from 'src/app/services/auth.service';
import { SectorService } from 'src/app/services/sector.service';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  public state:string;
  public sectors:Sector[];
  public companies:Company[];
  public dropDownTitle:string;
  public currentSector:Sector;

  constructor(private authService:AuthService, private sectorService:SectorService){
    this.state="";
    this.sectors=[];
    this.companies=[];
    this.dropDownTitle="Please select sector";
    this.currentSector = {
      "id": 0,
      "name": "",
      "brief":""
    }
  }

  ngOnInit(): void {
    this.state = this.authService.getCurrentUserRole();
    this.sectorService.getAllSectors().subscribe(allSectors => {
      this.sectors=allSectors;
    });
    console.log(this.sectors);
  }

  onSectorClick(sector:Sector){
    this.currentSector = sector;
    this.dropDownTitle = sector.name;
  }

  onLoadComapnies(){
    if(this.dropDownTitle==="Please select sector"){
      alert("Please select a sector");
    } else{
      this.sectorService.getCompanyBySector(this.currentSector.id).subscribe( allCompanies => {
        this.companies = allCompanies;
      })
    }
  }

}
