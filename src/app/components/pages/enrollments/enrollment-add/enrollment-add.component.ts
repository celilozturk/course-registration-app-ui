import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../../../../services/enrollment.service';
import { ErrorService } from '../../../../services/error.service';
import { SwalService } from '../../../../services/swal.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../../../services/course.service';
import { CandidateService } from '../../../../services/candidate.service';
import { CandidateModel } from '../../../../models/candidate.model';
import { CourseModel } from '../../../../models/course.model';
import { EnrollmentAddModel } from '../../../../models/enrollment-add.model';

@Component({
  selector: 'app-enrollment-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './enrollment-add.component.html',
  styleUrl: './enrollment-add.component.css'
})
export class EnrollmentAddComponent implements OnInit {

  candidates:CandidateModel[]=[];
  courses:CourseModel[]=[];
  enrollment:EnrollmentAddModel=new EnrollmentAddModel();
constructor(
  private enrollmentService:EnrollmentService,
  private courseService:CourseService,
  private candidateService:CandidateService,
  private router:Router,
  private swalService:SwalService,
  private errorService:ErrorService
){}

  ngOnInit(): void {
  this.getCandidates();
  this.getCourses();
  }

getCandidates(){
  this.candidateService.getAll().subscribe({
    next:(res:any)=>{
      this.candidates=res.items;
      console.log(this.candidates);
    },
    error:(err)=>{
      this.errorService.errorHandler(err);
    }
  })
}
getCourses(){
  this.courseService.getAll().subscribe({
    next:(res:any)=>{
      this.courses=res.items;
      console.log(this.courses);
    },
    error:(err)=>{
      this.errorService.errorHandler(err);
    }
  })
}
add(form:NgForm){
  if(form.valid){
    this.enrollmentService.add(this.enrollment).subscribe({
      next:(res)=>{
          this.swalService.callToast("Enrollment was assigned successfully!","success");
          this.router.navigateByUrl("/enrollments");
      },
      error:(err)=>{
        this.errorService.errorHandler(err);
      }
    });
  }
}

}
