import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ManagerComponent } from './manager/manager.component';
import { authGuard } from './guard/auth.guard';
const routes: Routes = [
  {
    path:'login-form',
    component:LoginFormComponent,
    canActivate:[authGuard]
  },
  {
    path:'request-form',
    component:RequestFormComponent,
    canActivate:[authGuard],
    data: { roles: ['Employee'] }
  },
  {
    path:'',
  redirectTo: '/login-form',
    pathMatch:"full"
  },
  {
    path:'admin-page',
    component:AdminPageComponent,
    
    canActivate:[authGuard],
    data: { roles: ['Admin'] }
  }
  ,{
    path:'manager',
    component:ManagerComponent,
    canActivate:[authGuard],
    data: { roles: ['Manager'] }
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
