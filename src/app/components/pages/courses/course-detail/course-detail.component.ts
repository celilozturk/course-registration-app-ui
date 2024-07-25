import { Component } from '@angular/core';
import { CourseService } from '../../../../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { CourseModel } from '../../../../models/course.model';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {
  course?:CourseModel;
  courseId:number=0;
  constructor(private courseService:CourseService, private activatedRoute:ActivatedRoute){
      this.courseId=Number(activatedRoute.snapshot.paramMap.get("id"));
      console.log(activatedRoute.snapshot.paramMap.get("id"));
      courseService.get(this.courseId).subscribe((res:any)=>{
        this.course=res;
      })
  }
}
