import { Component } from '@angular/core';
import { EnrollmentService } from '../../../services/enrollment.service';
import { EnrollmentModel } from '../../../models/enrollment.model';
import { ErrorService } from '../../../services/error.service';
import { SwalService } from '../../../services/swal.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EnrollmentUpdateModel } from '../../../models/enrollment-update.model';

@Component({
  selector: 'app-enrollments',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.css'
})
export class EnrollmentsComponent {
  enrollmentList:EnrollmentModel[]=[];
  constructor(private enrollmentService:EnrollmentService,private errorService: ErrorService, private swalService: SwalService){    
  }
  async ngOnInit(): Promise<void> {
    await this.getAll();
  }
  getAll() {
    this.enrollmentService.getAll().subscribe({
      next: (res: any) => {
        this.enrollmentList = res.items;
      },
      error: (err) => {
        this.errorService.errorHandler(err);
      }
    });
  }

  delete(id: number) {
    this.swalService.callSwal("Enrollment", "Do you want to delete the enrollment permanently?","Delete", () => {
      this.enrollmentService.delete(id).subscribe({
        next: (res) => {
          this.getAll();
          this.swalService.callToast("Enrollment was deleted Successfully", "success");
        },
        error: (err) => {
          console.log("Error message:" + err.message);
          this.errorService.errorHandler(err);
        }
      })
    });
  }
  
  approve(id:number){

    this.swalService.callSwal("Enrollment", "Do you want to approve the enrollment?", "Approve",() => {
      this.enrollmentService.approve(id).subscribe({
        next: (res) => {
          this.getAll();
          this.swalService.callToast("Enrollment was approved Successfully", "success");
        },
        error: (err) => {
          console.log("Error message:" + err.message);
          this.errorService.errorHandler(err);
        }
      })
    });
  }
}
