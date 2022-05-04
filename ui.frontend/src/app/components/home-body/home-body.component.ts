import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss']
})
export class HomeBodyComponent implements OnInit {
  @Input() logoBody;
  @Input() bodyResume;
  constructor() { }

  ngOnInit(): void {  }

}
