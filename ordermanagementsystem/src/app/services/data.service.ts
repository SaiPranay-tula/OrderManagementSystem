import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
    })

    export class DataService{
        custodianid:any
    instrument: any;
    instrumentDetails: any;
    instruments:any
        constructor(private http:HttpClient){

        }



        getcustodianid(){
            return localStorage.getItem('custId');
        }
        logoutUser(){
            localStorage.removeItem('custId')
        }
        
    }

