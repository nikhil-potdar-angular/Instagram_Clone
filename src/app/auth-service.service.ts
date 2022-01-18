import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  getObject(name: string){
    return JSON.parse(localStorage.getItem(name))
   }
   setObject(name: string,value: Object){
     localStorage.setItem(name, JSON.stringify(value));
   
   }
}
