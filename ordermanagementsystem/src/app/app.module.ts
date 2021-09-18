import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { HeaderComponent } from './header/header.component';
import { NavitemsComponent } from './navitems/navitems.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderComponent,
    HeaderComponent,
    NavitemsComponent,
    HomeComponent,
    ReportComponent,
    DashboardComponent,
    HistoryComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,

   
    RouterModule.forRoot([
      {
      path:"login",component:LoginComponent  
    },
    {
      path:"order", component:OrderComponent
    },
    
    {
      path:"home", component:HomeComponent
    },
    {
      path:"report", component:ReportComponent
    },
    {
      path:"dashboard", component:DashboardComponent
    },
    {
      path:"history", component:HistoryComponent
    }
    

  ])
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
