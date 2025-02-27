import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CourseModel } from '../models/course.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient, @Inject("Base_Api_Url") private baseUrl:string) { }

  getAll(){    
    return  this.http.get(`${this.baseUrl}/Courses/GetAll`);
  }
  get(id:number){
    return  this.http.get(`${this.baseUrl}/Courses/GetById/${id}`);
  }
  add(course:CourseModel){
    return this.http.post(`${this.baseUrl}/Courses/Create`,course);
  }
  update(course:CourseModel){
    return this.http.put(`${this.baseUrl}/Courses/Update`,course);
  }
  delete(id:number){
    return this.http.delete(`${this.baseUrl}/Courses/Delete/${id}`);
  }

}
