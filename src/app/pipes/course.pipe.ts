import { Pipe, PipeTransform } from '@angular/core';
import { CourseModel } from '../models/course.model';

@Pipe({
  name: 'course',
  standalone: true
})
export class CoursePipe implements PipeTransform {

  transform(value: CourseModel[],search: string): CourseModel[] {
    if(!search){
      return value;
    }
    return value.filter(c=>c.name?.toLowerCase().includes(search.toLowerCase())); 
  }

}
