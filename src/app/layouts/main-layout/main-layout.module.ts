import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DashboardModule } from '../../modules/dashboard.module';


@NgModule({
  declarations: [
    MainLayoutComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    AngularMaterialModule,
    RouterModule,
    DashboardModule
  ]
})
export class MainLayoutModule { }
