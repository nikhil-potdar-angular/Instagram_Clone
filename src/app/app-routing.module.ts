import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './register/components/email/email.component';
import { LoginComponent } from './register/components/login/login.component';
import { OTPComponent } from './register/components/otp/otp.component';
import { SetPasswordComponent } from './register/components/set-password/set-password.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = 
[
  
  // { path: '',   redirectTo: '/email', pathMatch: 'full' },
  { path: 'register',   component: RegisterComponent, 
    children:
    [
      { path: 'email',   component: EmailComponent },
      { path: 'otp',   component: OTPComponent   },
      { path: 'password',   component: SetPasswordComponent   },
      { path: 'login',   component: LoginComponent   }

    ] 
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
