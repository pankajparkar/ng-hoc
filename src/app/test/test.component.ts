import { Component, OnInit } from '@angular/core';
import { TooltipDirective } from '../tooltip.directive';

@Component({
  selector: 'app-test2',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent extends TooltipDirective implements OnInit {

  ngOnInit() {
  }

}
