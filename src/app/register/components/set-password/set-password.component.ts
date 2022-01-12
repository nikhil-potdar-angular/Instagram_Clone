import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      email: ['', [Validators.required, Validators.email]],
      Otp:['',[
        Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6)
      ]],
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
    return this.passwordForm.controls;
  }

  
  onSave() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.passwordForm.invalid) {
        return;
    }
    console.log(this.passwordForm.value);
    this.service.post('activate',this.passwordForm.value).subscribe(
      (res)=>{
        console.log(res);
       
      }
    )

    this.router.navigate(['register/login'])
}

}