import { Inject, Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, @Inject("Base_Api_Url") private baseUrl:string ) { }
  signIn(loginModel:LoginModel){
    return this.http.post(`${this.baseUrl}/Auth`,loginModel);
  }
}
