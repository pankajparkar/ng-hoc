import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipDirective } from './tooltip.directive';
import { DragNDropDirective } from './drag-n-drop.directive';
import { TestComponent } from './test/test.component';
import { PageComponent } from './page/page.component';
import { PagerComponent } from './pager/pager.component';

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
    NewComponent,
    DragNDropDirective,
    TestComponent,
    PageComponent,
    PagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
