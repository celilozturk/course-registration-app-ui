import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { CourseModel } from '../../../models/course.model';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ErrorService } from '../../../services/error.service';
import { SwalService } from '../../../services/swal.service';
import { FormsModule } from '@angular/forms';
import { CoursePipe } from "../../../pipes/course.pipe";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, CoursePipe],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {

  courseList: CourseModel[] = [];
  course1?: CourseModel;
  search:string="";
  constructor(private courseService: CourseService, private errorService: ErrorService, private swalService: SwalService) { }

  async ngOnInit(): Promise<void> {
    await this.getAll();
  }
  getAll() {
    this.courseService.getAll().subscribe({
      next: (res: any) => {
        this.courseList = res.items;
      },
      error: (err) => {
        this.errorService.errorHandler(err);
      }
    });
  }

  delete(id: number) {
    this.swalService.callSwal("course", "Do you want to delete this course permanently?", "Delete",() => {
      this.courseService.delete(id).subscribe({
        next: (res) => {
          this.swalService.callToast("course was deleted Successfully", "success");
          this.getAll();
        },
        error: (err) => {
          console.log("Error message:" + err.message);
          this.errorService.errorHandler(err);
        }
      })
    });
  }
}
