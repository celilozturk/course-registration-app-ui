import { Component } from '@angular/core';
import { CandidateService } from '../../../services/candidate.service';
import { ErrorService } from '../../../services/error.service';
import { SwalService } from '../../../services/swal.service';
import { CandidateModel } from '../../../models/candidate.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-candidates',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.css'
})
export class CandidatesComponent {
  candidateList:CandidateModel[]=[];
  constructor(private candidateService:CandidateService,private errorService: ErrorService, private swalService: SwalService){    
  }
  async ngOnInit(): Promise<void> {
    await this.getAll();
  }
  getAll() {
    this.candidateService.getAll().subscribe({
      next: (res: any) => {
        this.candidateList = res.items;
      },
      error: (err) => {
        this.errorService.errorHandler(err);
      }
    });
  }

  delete(id: number) {
    this.swalService.callSwal("course", "Do you want to delete candidate permanently?", () => {
      this.candidateService.delete(id).subscribe({
        next: (res) => {
          this.swalService.callToast("Candidate was deleted Successfully", "success");
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
