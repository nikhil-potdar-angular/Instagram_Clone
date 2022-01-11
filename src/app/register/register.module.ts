import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';

import { OTPComponent } from './components/otp/otp.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { EmailComponent } from './components/email/email.component';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    OTPComponent,
    SetPasswordComponent,
    EmailComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
 
})
export class RegisterModule { }
