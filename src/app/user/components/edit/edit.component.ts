import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public editForm: FormGroup;
  user:any
  userData:any
  username:any
  name:any
  email:any
  token:any

  constructor(private fb: FormBuilder,private service:HttpService) {
    this.editForm = this.fb.group({
      name: '',
      username: '',
      email: ''
    });
 }

  ngOnInit(): void {
    if (localStorage.getItem('userData')) {
      this.userData = JSON.parse(localStorage.getItem('userData'))
      this.username = this.userData.profile.username
      this.name=this.userData.profile.name
      this.email=this.userData.profile.email
 
     // Set Values
    this.editForm.controls["name"].setValue(this.name);
    this.editForm.controls["username"].setValue(this.username);
    this.editForm.controls["email"].setValue(this.email);
    }
   
  }
  onSave(){
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'))
      console.log(this.user);

      this.token = this.user.data.token
      console.log(this.token);
      const headers = {
        'Authorization': 'Bearer ' + this.token,
        'Content-Type': 'application/json'
      }
      console.log(headers)
      const data={
        id: this.userData.id,
        username: this.editForm.value.username,
        name: this.editForm.value.name,
        email: this.editForm.value.email
      }
      this.service.put('https://insta-clone-rest-api.glitch.me/api/v1/profile',data,{ headers }).subscribe((res) => {
        console.log(res);
      })

      

    }
  }

}
