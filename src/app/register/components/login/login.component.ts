import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted:boolean=false
  constructor(private router:Router,private formBuilder:FormBuilder, private service:HttpService) { }


  ngOnInit(): void {
    this.loginForm =  this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:['',Validators.required]

  });
  }

  get f() { return this.loginForm.controls; }

  
  onLogin() {
      this.submitted = true;
  
      // stop here if form is invalid
      // if (this.registerform.invalid) {
      //     return;
      // }
      console.log(this.loginForm.value);
      this.service.post('login',this.loginForm.value).subscribe(
        (res)=>{
          console.log(res);
         }
      )
  
  }
  
}
