import { Component, NgModule } from '@angular/core';
import { CourseService } from '../../../../services/course.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CourseModel } from '../../../../models/course.model';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ErrorService } from '../../../../services/error.service';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {
  course:CourseModel=new CourseModel();
  courseId:number=0;
  constructor(private courseService:CourseService,private errorService:ErrorService, private activatedRoute:ActivatedRoute, private router:Router){
      this.courseId=Number(activatedRoute.snapshot.paramMap.get("id"));
      courseService.get(this.courseId).subscribe((res:any)=>{
        this.course=res;
      })
  }
  update(form:NgForm){
    if(form.valid){
      //console.log(this.course);
      this.courseService.update(this.course).subscribe((res:any)=>{
        console.log(res);
        this.router.navigateByUrl("/courses");
      },(err)=>this.errorService.errorHandler(err));
    }
  }
}
