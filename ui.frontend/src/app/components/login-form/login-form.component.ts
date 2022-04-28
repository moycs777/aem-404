import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

export enum inputTypes {
  TEXT = "text",
  PASSWORD = "password",
}
export interface User {
  username: string;
  password: string;
};
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input() url: string;

  inputType: inputTypes = inputTypes.PASSWORD;
  hasLoginError: string = "";
  user: User = { 
    username: "",
    password: ""
  };
  isLoading: boolean = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  changeInputType() {
    if (this.inputType === inputTypes.PASSWORD) this.inputType = inputTypes.TEXT;
    else this.inputType = inputTypes.PASSWORD;
  }

  onSubmit() {
    if (this.isLoading) return;

    this.isLoading = true;
    if (this.user.username.trim().length === 0 || this.user.password.trim().length === 0) {
      this.hasLoginError = "Username and password are mandatory";
      this.isLoading = false;
    } else {
      this.hasLoginError = "";
      this.getUsersAndPasswords()
    }
  }  

  getUsersAndPasswords() {
    this.loginService.login().subscribe((res: any) => {
      console.log(res.logins);
      this.validateLogin(res.logins);
    })
  }

  validateLogin(users: []): void {
    const user: User = users.find((u: any) => u.username === this.user.username);
    this.isLoading = false;

    if (!user) {
      this.hasLoginError = "Incorrect password or username!";
    } else {
      if (user.password !== this.user.password) this.hasLoginError = "Incorrect password or username.";
      else {
        this.hasLoginError = ""; 
        this.goToHome();
      }      
    }
  }     

  goToHome() {
    this.router.navigate([this.url]);
  }

}
