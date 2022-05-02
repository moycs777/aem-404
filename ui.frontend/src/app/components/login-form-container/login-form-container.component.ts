import { MapTo } from '@adobe/aem-spa-component-mapping';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form-container',
  templateUrl: './login-form-container.component.html',
  styleUrls: ['./login-form-container.component.scss']
})
export class LoginFormContainerComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() url: string;
  @Input() myImage: any
  constructor() { }

  ngOnInit(): void {
    console.log('myImage', this.myImage);
  }

}
MapTo('angularapp/components/login-form-container')(LoginFormContainerComponent);
