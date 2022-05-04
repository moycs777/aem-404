import { MapTo } from '@adobe/aem-spa-component-mapping';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  @Input() logoHeader;
  @Input() logoBody;
  @Input() bodyResume;
  @Input() resfreshTime;
  @Input() loginUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
MapTo('angularapp/components/home-container')(HomeContainerComponent);
