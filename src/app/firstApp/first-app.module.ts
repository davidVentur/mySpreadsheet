import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstAppRoutingModule } from './first-app-routing.module';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    FirstAppRoutingModule
  ]
})
export class FirstAppModule { }
