import { MapTo } from '@adobe/aem-spa-component-mapping';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  @Input() text;
  @Input() checkbox;

  constructor() { }

  ngOnInit(): void {
  }

}
MapTo("angularapp/components/my-component")(MyComponentComponent);
