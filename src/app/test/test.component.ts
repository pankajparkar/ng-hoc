import { Component, OnInit, Input } from '@angular/core';
import { TooltipDirective } from '../tooltip.directive';

@Component({
  selector: 'app-test2',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent extends TooltipDirective implements OnInit {

  @Input() input;

  ngOnInit() {
    console.log(this.input, ' input')
  }

}
