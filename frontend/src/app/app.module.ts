import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SectorComponent } from './components/sector/sector.component';
import { HttpClientModule} from '@angular/common/http';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { AddExchangeComponent } from './components/add-exchange/add-exchange.component';
import { CompanyComponent } from './components/company/company.component';
import { IpoComponent } from './components/ipo/ipo.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { StockComponent } from './components/stock/stock.component';
import { AddIpoComponent } from './components/add-ipo/add-ipo.component';
import { ComparisonComponent } from './components/comparison/comparison.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { ExcelDataComponent } from './components/excel-data/excel-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    SectorComponent,
    ExchangeComponent,
    AddExchangeComponent,
    CompanyComponent,
    IpoComponent,
    AddCompanyComponent,
    StockComponent,
    AddIpoComponent,
    ComparisonComponent,
    ExcelDataComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
