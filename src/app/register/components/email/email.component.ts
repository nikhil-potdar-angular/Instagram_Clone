import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AbstractControl,  FormBuilder,FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  registerform: FormGroup;
  submitted = false;
  
  
  constructor(private router:Router,private formBuilder:FormBuilder, private service:HttpService) { }

  ngOnInit(): void {
    this.registerform =  this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
  });
  
}

get f(): { [key: string]: AbstractControl } {
  return this.registerform.controls;
}

  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerform.invalid) {
        return;
    }
    // console.log(this.registerform.value);
    this.service.post('register',this.registerform.value).subscribe(
      (res)=>{
        console.log(res);
       
      }
    )


    this.router.navigate(['register/otp'])
}
}

