import { NOTFOUND } from 'dns';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ConatctComponent } from './conatct/conatct.component';
 import{NotfoundComponent} from './notfound/notfound.component';
 

export const routes: Routes = [
    {path:"" , redirectTo:"home", pathMatch:'full'},
    {path:"home" , component:HomeComponent},
    {path:"about" , component:AboutComponent},
    {path:"portfolio" , component:PortfolioComponent},
    {path:"conatct" , component:ConatctComponent},
    {path:'**',component:NotfoundComponent},



];
