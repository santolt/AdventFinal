import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { ContainersComponent } from './components/containers/containers.component';
import { RequestMoveComponent } from './components/request-move/request-move.component';
import { PaymentComponent } from './components/payment/payment.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ContainersComponent,
    RequestMoveComponent,
    PaymentComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule
  ]
})
export class DashboardModule { }
