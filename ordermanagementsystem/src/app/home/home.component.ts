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
  this.img1="https://www.google.com/imgres?imgurl=https%3A%2F%2F196xoc1mzy15yalyx3q9xv31-wpengine.netdna-ssl.com%2Fwp-content%2Fuploads%2F2020%2F11%2FOrder-Process-Graphic.png&imgrefurl=https%3A%2F%2Fwww.comestri.com%2Fwhat-is-an-order-management-system%2F&tbnid=S2V8sDh_j3KB2M&vet=12ahUKEwie64zyl4nzAhWXGbcAHbwqB80QMygKegUIARDbAQ..i&docid=70RQibb0Cf4BxM&w=744&h=744&q=order%20management%20system%20images&ved=2ahUKEwie64zyl4nzAhWXGbcAHbwqB80QMygKegUIARDbAQ"
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
