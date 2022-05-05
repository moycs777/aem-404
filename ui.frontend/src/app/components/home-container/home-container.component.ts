import { MapTo } from '@adobe/aem-spa-component-mapping';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  @Input() logoHeader;
  @Input() resfreshTime;
  @Input() loginUrl;
  @Input() bodyResume1en;
  @Input() bodyResume1pt;
  @Input() bodyResume2en;
  @Input() bodyResume2pt;
  @Input() bodyResume3en;
  @Input() bodyResume3pt;
  @Input() bodyResume4en;
  @Input() bodyResume4pt;
  constructor() { }

  ngOnInit(): void {  }

}
MapTo('angularapp/components/home-container')(HomeContainerComponent);
