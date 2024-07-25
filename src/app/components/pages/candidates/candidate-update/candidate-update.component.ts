import { Component } from '@angular/core';
import { CandidateAddModel } from '../../../../models/candidate-add.model';
import { CandidateService } from '../../../../services/candidate.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorService } from '../../../../services/error.service';
import { SwalService } from '../../../../services/swal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidate-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './candidate-update.component.html',
  styleUrl: './candidate-update.component.css'
})
export class CandidateUpdateComponent {
  candidate:CandidateAddModel=new CandidateAddModel();
  candidateId:number=0;
  constructor(private candidateService:CandidateService,private errorService:ErrorService, private activatedRoute:ActivatedRoute, private router:Router,private swalService:SwalService){
    
  }
  ngOnInit(): void {
    this.candidateId=Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.candidateService.get(this.candidateId).subscribe({
      next: (res: any) => {
        this.candidate = res;
      },
      error: (err) => {
        this.errorService.errorHandler(err);
      }
    });   
    }
  update(form:NgForm){
    if(form.valid){      
      this.candidateService.update(this.candidate).subscribe({
        next:(res:any)=>{
          this.swalService.callToast("Candidate profile was updated successfully","success");
          this.router.navigateByUrl("/candidates");
        },error:(err)=>{
          this.errorService.errorHandler(err);
        }
      });
    }
  }
}
