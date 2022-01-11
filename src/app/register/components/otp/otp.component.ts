import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OTPComponent implements OnInit {
  otpForm: FormGroup;


  constructor(private router:Router,private formBuilder:FormBuilder, private service:HttpService) { }

  ngOnInit(): void {
    this.otpForm =  this.formBuilder.group({
      Otp: ['', [Validators.required]]
  });
    
  }


  validate(){
    this.service.post('confirm',this.otpForm.value).subscribe(
      (res)=>{
        console.log(res);
      }
    )

    this.router.navigate(['register/password'])

  }
}
