import { NgModule, OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetService } from '../get.service';

@Component({
    selector: 'home-comp',
    templateUrl: './home.html',
   
  })


  
export class HomeComponenet   {



LocalCounter: number = 0;

CounterUp(){
    this.LocalCounter++;


}
constructor(private dataService: GetService){


  }

    
}