import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipDirective } from './tooltip.directive';

@Component({
  selector: 'app-test',
  template: '<div>Test Text</div>'
})
export class NewComponent extends TooltipDirective {
  
}

@NgModule({
  declarations: [
    AppComponent,
    TooltipDirective,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
