import { ModelManager } from "@adobe/aem-spa-page-model-manager";

import { Constants } from "@adobe/aem-angular-editable-components";
import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';

export enum inputTypes {
  TEXT = "text",
  PASSWORD = "password",
}
export interface User {
  username: string;
  password: string;
};
@Component({
  selector: "#spa-root", // tslint:disable-line
  styleUrls: ["./app.component.css"],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  items: any;
  itemsOrder: any;
  path: any;
  inputType: inputTypes = inputTypes.PASSWORD;
  hasLoginError: string = "";
  user: User = { 
    username: "",
    password: ""
  };
  isLoading: boolean;

  constructor(private http: HttpClient) {
    ModelManager.initialize().then(this.updateData);
  }
  private updateData = (pageModel) => {
    this.path = pageModel[Constants.PATH_PROP];
    this.items = pageModel[Constants.ITEMS_PROP];
    this.itemsOrder = pageModel[Constants.ITEMS_ORDER_PROP];
  };

  changeInputType() {
    if (this.inputType === inputTypes.PASSWORD) this.inputType = inputTypes.TEXT;
    else this.inputType = inputTypes.PASSWORD;
  }

  onSubmit() {
    if (this.user.username.trim().length === 0 || this.user.password.trim().length === 0) {
      this.hasLoginError = "Username and password are mandatory";
    } else {
      this.hasLoginError = "";
      this.login()
    }
  }  

  login() {
    this.http.get('./assets/mocks/people.json').subscribe(res => {

      
    })
  }

  validateLogin() {
     
  }
}
