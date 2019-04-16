import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { PipeSummary } from "./summary.pipe";
import { FavoriteComponent } from './favorite/favorite.component';
import { RouterModule, Route } from '@angular/router'
import { HomeComponenet } from './home/home'
import { GetService } from './get.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MainComponent } from './main/main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';

const routes: Route[] = [ 
  //define "main" to be default route

  {path: '',
  redirectTo: 'main', pathMatch: 'full'
  },

  {path: 'home',
   component: HomeComponenet
   },

   {path: 'main',
   component: MainComponent
   },

   {path: 'about',
   component: AboutComponent
   }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponenet,
    PipeSummary,
    FavoriteComponent,
    MainComponent,
    NavBarComponent,
    AboutComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    Ng2SearchPipeModule
    
    
  ],
  providers: [GetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
