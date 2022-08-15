import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DashboardModule } from '../../modules/dashboard.module';
import { ContainersComponent } from './components/containers/containers.component';
import { RequestMoveComponent } from './components/request-move/request-move.component';
import { PaymentComponent } from './components/payment/payment.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    SidenavComponent,
    ToolbarComponent,
    ContainersComponent,
    RequestMoveComponent,
    PaymentComponent,
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
