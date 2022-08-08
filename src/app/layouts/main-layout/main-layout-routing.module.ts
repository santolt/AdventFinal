import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsGuard } from 'src/app/core/guards/permissions/permissions.guard';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  {
    path:"",
    component: MainLayoutComponent,
    canActivate:[PermissionsGuard],
    children:[
      {
        path:"",
        pathMatch:"full",
        redirectTo:"dashboard",

      },
      {
        path: "dashboard",
        pathMatch: "full",
        loadChildren: ()=> import('../../modules/dashboard.module').then(m=> m.DashboardModule)
      }
    ],
    
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
