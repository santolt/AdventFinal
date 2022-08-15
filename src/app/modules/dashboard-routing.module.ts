import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ContainersComponent } from './components/containers/containers.component';
import { RequestMoveComponent } from './components/request-move/request-move.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {
    path:"",
    component: DashboardComponent,

  },
  {
    path: "container",
    component: ContainersComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }


// children:[
//   {
//     path:"containers",
//     component: ContainersComponent
//   },
//   {
//     path:"request",
//     component: RequestMoveComponent
//   },
//   {
//     path:"payment",
//     component: PaymentComponent
//   },
// ]