import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {
  passwordForm: FormGroup;
  submitted:boolean=false
  constructor(private router:Router,private formBuilder:FormBuilder, private service:HttpService) { }

  ngOnInit(): void {
    this.passwordForm =  this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Otp:['',Validators.required],
      password:['',Validators.required]

  });
  }
  get f() { return this.passwordForm.controls; }

  
  onSave() {
    this.submitted = true;

    // stop here if form is invalid
    // if (this.registerform.invalid) {
    //     return;
    // }
    console.log(this.passwordForm.value);
    this.service.post('activate',this.passwordForm.value).subscribe(
      (res)=>{
        console.log(res);
       
      }
    )

    this.router.navigate(['register/login'])
}

}
