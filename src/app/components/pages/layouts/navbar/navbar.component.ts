import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isAuth: boolean = false;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.checkIsAuth();
  }

  checkIsAuth() {
    if (localStorage.getItem("token")) {
      this.isAuth = true;
    }
  }
    signOut(){
      localStorage.removeItem("token");
      this.router.navigateByUrl("/login");
    }
  }
