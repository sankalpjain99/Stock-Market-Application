import { Component, OnInit } from '@angular/core';
import { ExcelData } from 'src/app/models/excel-data';
import { AuthService } from 'src/app/services/auth.service';
import { StockPriceService } from 'src/app/services/stock-price.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel-data',
  templateUrl: './excel-data.component.html',
  styleUrls: ['./excel-data.component.css']
})
export class ExcelDataComponent implements OnInit {

  public state:string;
  public fileData: [number, number, number, string, string][];
  public unsuccessfullAttempts:number;
  public total:number;

  constructor(private authService:AuthService, private stockPriceService:StockPriceService) {
    this.state="";
    this.fileData = [];
    this.unsuccessfullAttempts=0;
    this.total=0;
  }

  ngOnInit(): void {
    this.state = this.authService.getCurrentUserRole();
  }

  onFileChange(event: any){
    const target: DataTransfer = <DataTransfer>(event.target);
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname : string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.fileData = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      let x = this.fileData.slice(1);
      this.fileData = x;
    };
    reader.readAsBinaryString(target.files[0]);
  }

  onSubmit(){
    let excelData: ExcelData[] = [];
    this.fileData.forEach((data)=>{
      var dataLine: [number, number, number, string, string] = data;
      if(dataLine.length){
        excelData.push({
        companyId: dataLine[0],
        exchangeId: dataLine[1],
        price: dataLine[2],
        timestamp: dataLine[3].trim() +"T"+dataLine[4].trim() +".000+05:30"
      });
      }
    })
    this.total = excelData.length;
    console.log(excelData);
    this.stockPriceService.addStockPrice(excelData).subscribe(rowsNotAdded => {
      console.log(rowsNotAdded);
      this.unsuccessfullAttempts = rowsNotAdded.length;
    })
  }

}
