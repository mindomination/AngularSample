import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
 MainCounter: number = 0;

  value = '';
  update(value: string) { this.value = value; }

  Displaytext: string="sample text";

 array: any[]=[];
 mainCounter: number=0;
   
 title = 'http-practice';
 configUrl = 'https://restcountries.eu/rest/v2/all';


  constructor(private http: HttpClient){
    this.http.get(this.configUrl).subscribe( (d:any)=>{this.array=d} );
  }


type() {}


  getCounter (counter: number){
    this.mainCounter = counter;
  }






  


}
