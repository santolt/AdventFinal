import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsGuard } from 'src/app/core/guards/permissions/permissions.guard';
import { ContainersComponent } from './components/containers/containers.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RequestMoveComponent } from './components/request-move/request-move.component';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  {
    path:"",
    component: MainLayoutComponent,
    // canActivate:[PermissionsGuard],
    children:[
      {
        path: 'containers',
        component: ContainersComponent
      },
      {
        path:'request',
        component: RequestMoveComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      }
    ],
    
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
