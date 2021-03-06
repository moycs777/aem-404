import { MapTo } from '@adobe/aem-spa-component-mapping';
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
  hasLoginError = "";
  user: User = {
    username: "",
    password: ""
  };
  isLoading = false;

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
    const user: any = users.find((u: any) => u.login === this.user.username);
    this.isLoading = false;
    if (user === undefined ) {
      this.hasLoginError = "Incorrect password or username!";
    } else {
      if ((user.password.toString()) !== this.user.password) this.hasLoginError = "Incorrect password or username.";
      else {
        console.log('success user : ', user);
        this.hasLoginError = "";
        this.setCurrentUser(user);
        this.goToHome();
      }
    }
  }

  goToHome() {
    console.log("this.url", this.url);
    this.router.navigate([this.url]);
  }

  setCurrentUser(user: any) {
    this.loginService.setCurrentUser(user);
  }
}
MapTo("angularapp/components/login-form")(LoginFormComponent);
