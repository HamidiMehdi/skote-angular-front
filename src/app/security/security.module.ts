import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {SecurityRoutingModule} from "./security-routing.module";
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule
  ]
})
export class SecurityModule { }
