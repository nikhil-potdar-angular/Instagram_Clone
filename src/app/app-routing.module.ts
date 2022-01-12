import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './register/components/email/email.component';
import { LoginComponent } from './register/components/login/login.component';
import { OtpComponent } from './register/components/otp/otp.component';
import { SetPasswordComponent } from './register/components/set-password/set-password.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './user/components/profile/profile.component';
import { UserComponent } from './user/user.component';

const routes: Routes =
  [
    { path: '', redirectTo: 'register/email', pathMatch: 'full' },
    {
      path: 'register', component: RegisterComponent,
      children:
        [
          { path: 'email', component: EmailComponent },
          { path: 'otp', component: OtpComponent },
          { path: 'password', component: SetPasswordComponent },
          { path: 'login', component: LoginComponent }

        ]
    },
    {
      path: 'user', component: UserComponent,
      children:
        [
          { path: 'profile', component: ProfileComponent },
        ]
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
