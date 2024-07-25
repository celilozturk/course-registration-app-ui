import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CourseModel } from '../../../../models/course.model';
import { CourseService } from '../../../../services/course.service';
import { Router, RouterLink } from '@angular/router';
import { SwalService } from '../../../../services/swal.service';
import { ErrorService } from '../../../../services/error.service';

@Component({
  selector: 'app-course-add',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterLink],
  templateUrl: './course-add.component.html',
  styleUrl: './course-add.component.css'
})
export class CourseAddComponent {
course:CourseModel=new CourseModel();
  constructor(private courseService:CourseService,private router:Router,private swalService:SwalService,private errorService:ErrorService){}
  add(form:NgForm){
    if(form.valid){
      this.courseService.add(this.course).subscribe({
        next:(res)=>{
          this.swalService.callToast("Course was updated successfully","success");
          this.router.navigateByUrl("/courses");
        },
        error:(err)=>this.errorService.errorHandler(err)
      });
    }
  }
}
