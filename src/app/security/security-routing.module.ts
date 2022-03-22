import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import * as ROUTES from '../routes';

const routes: Routes = [
  {path: ROUTES.BASE, redirectTo: 'login', pathMatch: 'full'},
  {path: ROUTES.LOGIN, component: LoginComponent},
  {path: ROUTES.REGISTER, component: RegisterComponent},
  {path: ROUTES.RESET_PASSWORD, component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
