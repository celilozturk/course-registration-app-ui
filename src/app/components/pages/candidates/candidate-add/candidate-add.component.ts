import { Component, NgModule } from '@angular/core';
import { CandidateService } from '../../../../services/candidate.service';
import { ErrorService } from '../../../../services/error.service';
import { SwalService } from '../../../../services/swal.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateAddModel } from '../../../../models/candidate-add.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidate-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './candidate-add.component.html',
  styleUrl: './candidate-add.component.css'
})
export class CandidateAddComponent {

  candidate:CandidateAddModel=new CandidateAddModel();
constructor(private candidateService:CandidateService,private router:Router,private swalService:SwalService,private errorService:ErrorService){}

add(form:NgForm){
  if(form.valid){
    this.candidateService.add(this.candidate).subscribe({
      next:(res)=>{
        this.swalService.callToast("Candidate was updated successfully","success");
        this.router.navigateByUrl("/candidates");
      },
      error:(err)=>this.errorService.errorHandler(err)
    });
  }
}


}


