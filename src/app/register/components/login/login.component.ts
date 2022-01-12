import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted:boolean=false
  userData:any
  constructor(private router:Router,private formBuilder:FormBuilder, private service:HttpService) { }


  ngOnInit(): void {
    this.loginForm =  this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:['',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40)
      ]
    ]
 });
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  
  onLogin() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      console.log(this.loginForm.value);
      this.service.post('login',this.loginForm.value).subscribe(
        (res)=>{
          console.log(res);
          this.userData=res
          localStorage.setItem('user',JSON.stringify(this.userData));
          this.router.navigate(['user/profile'])
         }
      )
  
  }
  
}
