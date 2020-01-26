import { Component, OnInit } from '@angular/core';
import { withStyle } from './../withStyle'

@withStyle({
  style: `
    test: {
      border: red;
    }
  `
})
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('routeParams');
  }

}
