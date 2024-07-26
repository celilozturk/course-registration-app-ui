import { Component } from '@angular/core';
import { CandidateService } from '../../../services/candidate.service';
import { ErrorService } from '../../../services/error.service';
import { SwalService } from '../../../services/swal.service';
import { CandidateModel } from '../../../models/candidate.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CandidatePipe } from "../../../pipes/candidate.pipe";

@Component({
  selector: 'app-candidates',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, CandidatePipe],
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.css'
})
export class CandidatesComponent {
  candidateList: CandidateModel[] = [];
  search: string = "";

  constructor(private candidateService: CandidateService, private errorService: ErrorService, private swalService: SwalService) {  }
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
    this.swalService.callSwal("Candidate", "Do you want to delete candidate permanently?", "Delete", () => {
      this.candidateService.delete(id).subscribe({
        next: (res) => {
          this.getAll();
          this.swalService.callToast("Candidate was deleted Successfully", "success");
        },
        error: (err) => {
          console.log("Error message:" + err.message);
          this.errorService.errorHandler(err);
        }
      })
    });
  }
}
