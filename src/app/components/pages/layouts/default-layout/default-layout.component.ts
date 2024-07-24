import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.css'
})
export class DefaultLayoutComponent {

}
