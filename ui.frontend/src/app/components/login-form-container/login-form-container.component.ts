import { MapTo } from '@adobe/aem-spa-component-mapping';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form-container',
  templateUrl: './login-form-container.component.html',
  styleUrls: ['./login-form-container.component.scss']
})
export class LoginFormContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
MapTo('angularapp/components/login-form-container')(LoginFormContainerComponent);
