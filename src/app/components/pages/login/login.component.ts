import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginModel } from '../../../models/login.model';
import { AuthService } from '../../../services/auth.service';
import { ErrorService } from '../../../services/error.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService:AuthService, private errorService:ErrorService, private router:Router){}

  loginModel:LoginModel=new LoginModel();
  login(loginForm:NgForm){
    if(loginForm.valid){
      let model={userNameOrEmail:this.loginModel.email, password:this.loginModel.password}
      console.log(this.loginModel);
      this.authService.signIn(model).subscribe({
        next:(res:any)=>{
          console.log(res);
          localStorage.setItem("token",res.token);
          this.router.navigateByUrl("/");
        },
        error:(err)=>{
          this.errorService.errorHandler(err);
        }
      })
    }
  }
}
