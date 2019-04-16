import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetService  {
  configUrl = 'https://restcountries.eu/rest/v2/all';

  data: any []=[] ;

  constructor(private http: HttpClient) { 
    this.http.get(this.configUrl).subscribe( (d: any)=>{this.data=d} );
  }
}
