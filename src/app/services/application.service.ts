import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ApplicationModel } from '../models/application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http:HttpClient, @Inject("Base_Api_Url") private baseUrl:string) { }

  add(application:ApplicationModel){
    return this.http.post(`${this.baseUrl}/Applications`,application);
  }
}
