import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';

const routes: Routes = [

  {
    path:"",
    pathMatch:"full",
    redirectTo:"login",
  },
  {
    path: "",
    loadChildren: ()=> import("./layouts/main-layout/main-layout.module").then(m=> m.MainLayoutModule)
  },
  {
    path: "login",
    component: LoginLayoutComponent
  },
  {
    path:'**',
    redirectTo: 'login',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
