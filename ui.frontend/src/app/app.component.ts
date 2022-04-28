import { ModelManager } from "@adobe/aem-spa-page-model-manager";

import { Constants } from "@adobe/aem-angular-editable-components";
import { Component } from "@angular/core";

export enum inputTypes {
  TEXT = "text",
  PASSWORD = "password",
}
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

  constructor() {
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
}
