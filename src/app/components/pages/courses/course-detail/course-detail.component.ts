import { Component, NgModule, OnInit } from '@angular/core';
import { CourseService } from '../../../../services/course.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { CourseModel } from '../../../../models/course.model';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ErrorService } from '../../../../services/error.service';
import { SwalService } from '../../../../services/swal.service';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit {
  course:CourseModel=new CourseModel();
  courseId:number=0;
  constructor(private courseService:CourseService,private errorService:ErrorService, private activatedRoute:ActivatedRoute, private router:Router,private swalService:SwalService){
    
  }
  ngOnInit(): void {
    this.courseId=Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.courseService.get(this.courseId).subscribe({next:(res:any)=>{
      this.course=res;
    },error:(err)=>{
      this.errorService.errorHandler(err);
      console.log("error occured!");
    }});
  }
  update(form:NgForm){
    if(form.valid){
      //console.log(this.course);
      this.courseService.update(this.course).subscribe({next:(res:any)=>{
        console.log(res);
        this.swalService.callToast("Course was updated successfully","success");
        this.router.navigateByUrl("/courses");
      },error:(err)=>this.errorService.errorHandler(err)});
    }
  }
}
