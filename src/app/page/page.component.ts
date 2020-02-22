import { Component, OnInit, Injector, ElementRef, Input } from '@angular/core';
import { withStyle } from './../hoc/withStyle';

@withStyle({
  // TODO: right interceptor to write down _ngcontent_ part
  style: `
    .test[_ngcontent-%COMP%] {
      border: 1px solid red;
    }
  `
})
@Component({
  // selector: 'app-page-jump, app-page',
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {

  @Input() test;

  constructor(
    private injector: Injector
  ) {
  }

  ngOnInit() {
    console.log('routeParams', this.test);
  }

}
