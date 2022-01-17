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

  get(token:string,link:string,data:any){
   
  return this.http.get(this.baseUrl+link,data)
  }
  put(link:string,json:any,header:any,){
  return this.http.put(link,json,header)
    
  }
}
