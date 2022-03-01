import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondAppRoutingModule } from './second-app-routing.module';

//AngularMaterial
import { MenuComponent } from './menu/menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

//Components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [MenuComponent, HomeComponent, AboutComponent],
  imports: [
    CommonModule,
    SecondAppRoutingModule,
    //AngularMaterial
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
  ],
})
export class SecondAppModule {}
