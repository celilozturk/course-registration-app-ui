import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../services/course.service';
import { ErrorService } from '../../../services/error.service';
import { SwalService } from '../../../services/swal.service';
import { CourseModel } from '../../../models/course.model';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ApplicationModel } from '../../../models/application.model';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.css'
})
export class ApplicationsComponent implements OnInit {
  courseList: CourseModel[] = [];
  courseSelected:CourseModel=new CourseModel();
  application:ApplicationModel=new ApplicationModel();
  courseId:number=1;
  constructor(private router: Router, private courseService: CourseService, private errorService: ErrorService, private swalService: SwalService,private activatedRoute:ActivatedRoute) { 
    this.courseId=Number(this.activatedRoute.snapshot.paramMap.get("id"));
    //console.warn(this.courseId);
  }
  ngOnInit(): void {
    this.getAllCourses();
    this.getCourseById(this.courseId);
  }

  getAllCourses() {
    this.courseService.getAll().subscribe({
      next: (res: any) => this.courseList = res.items,
      error: (err) => this.errorService.errorHandler(err)
    })
  }
  getCourseById(id:number){
    this.courseService.get(id).subscribe({
      next:(res)=>{
        res
        this.courseSelected=res;
      },
      error:(err)=>{
        this.errorService.errorHandler(err);
      }
    })
  }
 
  createApplication(form:NgForm){    
    if(form.valid){
        console.log(this.application);
    }
  }
}
