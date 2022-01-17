import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any
  token: any
  userData:any
  username:any
  constructor(private router:Router,private service: HttpService) { }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'))
      console.log(this.user);

      this.token = this.user.data.token
      console.log(this.token);
      const headers = {
        'Authorization': 'Bearer ' + this.token
      }
      this.service.get(this.token, 'me', { headers }).subscribe((res) => {
        console.log(res);
        let userData=res
        localStorage.setItem('userData',JSON.stringify(userData))
      })
    }

    if (localStorage.getItem('userData')) {
      this.userData = JSON.parse(localStorage.getItem('userData'))
      this.username = this.userData.profile.username
    }
  }
  onClick(){
          this.router.navigate(['user/edit'])
  }

}
