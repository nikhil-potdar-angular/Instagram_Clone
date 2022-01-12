import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  otpForm: FormGroup;
  submitted: boolean = false

  constructor(private router: Router, private formBuilder: FormBuilder, private service: HttpService) { }

  ngOnInit(): void {
    this.otpForm = this.formBuilder.group({
      Otp: ['', [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6)
    ]]

    });

  }

  get f(): { [key: string]: AbstractControl } {
    return this.otpForm.controls;
  }
  validate() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.otpForm.invalid) {
      return;
    }

    this.service.post('confirm', this.otpForm.value).subscribe(
      (res) => {
        console.log(res);
      }
    )

    this.router.navigate(['register/password'])

  }
}
