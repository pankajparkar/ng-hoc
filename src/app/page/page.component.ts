import { Component, OnInit } from '@angular/core';
import { withStyle } from './../withStyle'

@withStyle({
  // TODO: right interceptor to write down _ngcontent_ part
  style: `
    .test[_ngcontent-%COMP%] {
      border: 1px solid red;
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
