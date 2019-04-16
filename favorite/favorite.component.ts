import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

 isFavorite: boolean=false;
 static counter: number =0;
 @Output() SendLikes= new EventEmitter();

 onClick() { 
   
  this.isFavorite= !this.isFavorite; 
  FavoriteComponent.counter++;
  this.SendLikes.emit( FavoriteComponent.counter.toString() );


}
  constructor() { }
  
  ngOnInit() {
  }

}
