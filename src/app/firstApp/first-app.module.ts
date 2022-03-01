import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstAppRoutingModule } from './first-app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';


@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    FirstAppRoutingModule
  ]
})
export class FirstAppModule { }
