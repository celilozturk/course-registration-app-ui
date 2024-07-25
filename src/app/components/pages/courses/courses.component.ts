import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { CourseModel } from '../../../models/course.model';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  courseList:CourseModel[]=[];

  constructor(private courseService:CourseService){ }
  async ngOnInit(): Promise<void> {
   await this.getAll();
  }
  async getAll(){
    this.courseService.getAll().subscribe((res:any)=>{   
      this.courseList=res.items;
    });
  }

}
