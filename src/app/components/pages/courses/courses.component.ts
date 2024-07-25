import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { CourseModel } from '../../../models/course.model';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  courseList:CourseModel[]=[];
  course1?:CourseModel;
  constructor(private courseService:CourseService){ }
  async ngOnInit(): Promise<void> {
   await this.getAll();
  }
   getAll(){
    this.courseService.getAll().subscribe((res:any)=>{   
      this.courseList=res.items;
    });
  }
  getById(id:number){
      this.courseService.get(id).subscribe((res:any)=>{
        this.course1=res;
        console.log(res);
      })
  }


}
