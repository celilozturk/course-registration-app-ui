import { Pipe, PipeTransform } from '@angular/core';
import { ApplicationModel } from '../models/application.model';

@Pipe({
  name: 'application',
  standalone: true
})
export class ApplicationPipe implements PipeTransform {

  transform(value: ApplicationModel[], search: string[]): ApplicationModel[] {
      if(!search){
        return value;
      }
      value.filter(a=>a.)
    return null;
  }

}
