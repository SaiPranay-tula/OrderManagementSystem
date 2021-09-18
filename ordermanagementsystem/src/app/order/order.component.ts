import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  clientid:any
  order:any
  instruments:any
  client:any
  qe:any
  quantity:any
  price:any
  flag:any
  flag1:any
  direction:any
  direction1:any
  BirthDate:any
  clientName:any
  instrumentId:any
  instrument:any
  instrumentDetails: any;
  
  constructor(private http:HttpClient,private service:DataService) {
    // this.quantity=
    // this.instruments;

    
    this.instrumentDetails={
      "instrumentId": "",
  "instrumentName": "",
  "faceValue": "",
  "expiryDate": ""
 
    }
    this.qe=100;
    this.flag=0;
    this.clientName="";
    this.instrumentId="";
    this.price="";
    this.direction=[{
      name:"Buy",
      value:"b"
    },
    {
      name:"Sell",
      value:"s"
    }

  ];
    
  this.order={
    "clientid":this.client,
    "instrumentid":this.instrument,
    "price":this.price,
    "quantity":this.quantity
    
  }
  }
  ngOnInit(): void {
   
    this.http.get("http://localhost:8080/clientDetails/"+this.service.getcustodianid())
.subscribe((result:any)=>{
this.client = result.map((item: any) => {
return { clientId: item.clientId, clientName: item.clientName };
});
},
err=>{
console.log(err);
})

this.http.get("http://localhost:8080/instruments/")
.subscribe((result:any)=>{
this.instruments = result.map((item: any) => {
  return { instrumentId: item.instrumentId, instrumentName: item.instrumentName };
  })
},
err=>{
console.log(err);
})

  }

  selected1(instrumentId1:any){
    // console.log(instrument);
    this.http.get("http://localhost:8080/instruments/"+instrumentId1)
.subscribe((result:any)=>{
  if(result.expiryDate==null)
  result.expiryDate="NA";
this.instrumentDetails = result;


console.log(this.instrumentDetails)

},
err=>{
console.log(err);
})
  }

  selected(){

    
   // console.log(this.direction)
   this.flag1=0;
    //console.log(this.direction1)
    //alert(this.direction1)
    if(this.direction1=="s" && this.quantity>this.qe)
    {
  
      this.flag1=1;
      
    }
    else
    this.flag1=0;

    // if(this.direction1=="b"){
    //   //then call Buy API 
     
    // }
    // else 
    // //call Sell API

  }
  
  RegisterOrder(orderForm: NgForm): void {  
    if(this.quantity%25!=0)
    this.flag=1;
    else
    this.flag=0;
    // console.log(orderForm.value);
    // console.log(orderForm);
    
  

  }
}
