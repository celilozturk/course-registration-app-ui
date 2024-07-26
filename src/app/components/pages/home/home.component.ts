import { Component, Inject } from '@angular/core';
import { CourseModel } from '../../../models/course.model';
import { CourseService } from '../../../services/course.service';
import { ErrorService } from '../../../services/error.service';
import { SwalService } from '../../../services/swal.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  courseList: CourseModel[] = [];
  course1?: CourseModel;
  
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
