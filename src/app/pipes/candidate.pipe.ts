import { Pipe, PipeTransform } from '@angular/core';
import { CandidateModel } from '../models/candidate.model';

@Pipe({
  name: 'candidate',
  standalone: true
})
export class CandidatePipe implements PipeTransform {

  transform(value: CandidateModel[], search: string): CandidateModel[] {
    if(!search){
      return value;
    }
    return value.filter(c=>c.fullName?.toLowerCase().includes(search.toLowerCase()) || c.email?.toLowerCase().includes(search.toLowerCase())); 
  }

}
