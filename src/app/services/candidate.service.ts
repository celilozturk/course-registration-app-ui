import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CourseModel } from '../models/course.model';
import { CandidateModel } from '../models/candidate.model';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http:HttpClient, @Inject("Base_Api_Url") private baseUrl:string) { }

  getAll(){    
    return  this.http.get(`${this.baseUrl}/Candidates`);
  }
  get(id:number){
    return  this.http.get(`${this.baseUrl}/Candidates/${id}`);
  }
  add(candidate:CandidateModel){
    return this.http.post(`${this.baseUrl}/Candidates`,candidate);
  }
  update(candidate:CandidateModel){
    return this.http.put(`${this.baseUrl}/Candidates`,candidate);
  }
  delete(id:number){
    return this.http.delete(`${this.baseUrl}/Candidates/${id}`);
  }
}
