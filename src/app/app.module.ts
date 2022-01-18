import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RegisterModule } from './register/register.module';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { AuthServiceService } from './auth-service.service';
=======
>>>>>>> 7719f8dc5067acf9d8a1767bb3dd96c9aa6a53c4
 import 'boxicons';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RegisterModule,
    UserModule,
    
  ],
  providers: [
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
