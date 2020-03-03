import { Component, OnInit, Injector, ElementRef, Input } from '@angular/core';
import { withStyle } from './../hoc/decorators/withStyle';
import { fadeIn } from '../hoc/decorators/animation/fadeIn';

// @fadeIn()
// @withStyle({
//   // TODO: write function that parse and add _ngcontent_ dynamically.
//   style: `
//     .test[_ngcontent-%COMP%] {
//       border: 1px solid red;
//     }
//   `
// })
@Component({
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

  ngAfterViewInit() {
    console.log(this, 'After View INit')
  }

  ngOnInit() {
    console.log('routeParams', this.test);
  }

}
