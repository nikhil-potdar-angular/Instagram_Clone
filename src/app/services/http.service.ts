import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.apiUrl
  constructor(private http:HttpClient) { }
  
  post(link:string,data:any){
    return this.http.post(this.baseUrl+link,data)
  }
}
