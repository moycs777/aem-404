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

  constructor() { }

  ngOnInit(): void {
  }

}
