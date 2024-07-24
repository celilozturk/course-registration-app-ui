import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(@Inject("Base_Api_Url") private baseUrl:string){
    // this.baseUrlString=baseUrl;
  }

}
