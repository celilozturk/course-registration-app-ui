import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CourseService } from '../../../services/course.service';
import { ErrorService } from '../../../services/error.service';
import { SwalService } from '../../../services/swal.service';
import { CourseModel } from '../../../models/course.model';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ApplicationModel } from '../../../models/application.model';
import { ApplicationService } from '../../../services/application.service';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.css'
})
export class ApplicationsComponent implements OnInit {
  courseList: CourseModel[] = [];
  courseSelected:CourseModel=new CourseModel();
  application:ApplicationModel=new ApplicationModel();
  courseId:number=0;
  applicationCount:number=0;
  totalParticipants:number=0;
  constructor(private applicationService:ApplicationService,private router: Router, private courseService: CourseService, private errorService: ErrorService, private swalService: SwalService,private activatedRoute:ActivatedRoute) { 
    this.courseId=Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.application.courseId=this.courseId;
    //console.warn(this.courseId);
  }
  ngOnInit(): void {
    this.getAllCourses();
    this.getCourseById(this.courseId);
    this.getApplicationCountByCourseId(this.courseId);
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
  getApplicationCountByCourseId(courseId:number){
    this.applicationService.getApplicationCountByCourseId(courseId).subscribe({
      next:(res:any)=>{
          this.applicationCount=res.applicationCount;
          this.totalParticipants=res.totalParticipants;
      },
      error:(err)=>{
        this.errorService.errorHandler(err);
      }
    });
  }
 
  createApplication(form:NgForm){    
    if(form.valid){
        console.log(this.application);
        this.applicationService.add(this.application).subscribe({
          next:(res)=>{
            this.swalService.callToast("You have applied successfully!");
            this.router.navigateByUrl("/");
          },
          error:(err)=>{
            this.errorService.errorHandler(err);
          }
        });
    }
  }
}
