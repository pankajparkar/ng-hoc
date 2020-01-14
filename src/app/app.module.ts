import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipDirective } from './tooltip.directive';
import { DragNDropDirective } from './drag-n-drop.directive';
import { TestComponent } from './test/test.component';
import { PageComponent } from './page/page.component';
import { PagerComponent } from './pager/pager.component';
import { BubblyEffectDirective } from './bubbly-effect.directive';
import { PopoverComponent } from './popover/popover.component';
import { ClearAllSubscriptionComponent } from './clear-all-subscription/clear-all-subscription.component';
import { WithRouterComponent } from './with-router/with-router.component';
import { WithAddDebuggingComponent } from './with-add-debugging/with-add-debugging.component';

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
    PagerComponent,
    BubblyEffectDirective,
    PopoverComponent,
    ClearAllSubscriptionComponent,
    WithRouterComponent,
    WithAddDebuggingComponent
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
