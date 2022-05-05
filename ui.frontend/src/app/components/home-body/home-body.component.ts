import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss']
})
export class HomeBodyComponent implements OnInit {
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
