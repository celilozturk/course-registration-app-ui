import { Inject, Injectable } from '@angular/core';
import { EnrollmentModel } from '../models/enrollment.model';
import { HttpClient } from '@angular/common/http';
import { EnrollmentUpdateModel } from '../models/enrollment-update.model';
import { EnrollmentAddModel } from '../models/enrollment-add.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private http:HttpClient, @Inject("Base_Api_Url") private baseUrl:string) { }

  
  getAll(){    
    return  this.http.get(`${this.baseUrl}/Enrollments`);
  }
  get(id:number){
    return  this.http.get(`${this.baseUrl}/Enrollments/${id}`);
  }
  add(enrollment:EnrollmentAddModel){
    return this.http.post(`${this.baseUrl}/Enrollments`,enrollment);
  }
  update(enrollment:EnrollmentModel){
    return this.http.put(`${this.baseUrl}/Enrollments`,enrollment);
  }
  delete(id:number){
    // 
    return this.http.delete(`${this.baseUrl}/Enrollments`,({body:{id:id}}));
  }
  approve(id:number){
    return this.http.post(`https://localhost:7015/api/Enrollments/Approve/${id}`,null);
  }

 }
