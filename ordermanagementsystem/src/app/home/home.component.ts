import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any
  img1:any
  constructor(private http:HttpClient) { 
this.img1="https://196xoc1mzy15yalyx3q9xv31-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/Order-Process-Graphic.png"
  }
  ngOnInit(): void {
    this.http.get("http://localhost:8080/instruments/custodian/CS001")
    .subscribe((result:any)=>{
      console.log(result);
      this.data=result;
    })
    console.log(this.data);
    
  }

}
