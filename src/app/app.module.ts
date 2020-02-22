import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA, ɵComponentType } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { ClearAllSubscriptionComponent } from './clear-all-subscription/clear-all-subscription.component';
import { jump } from './hoc/animation/jump';

// const PageWithJump = jump(PageComponent, 'jump') as any;
const pageWithJump = jump(PageComponent, 'jump') as ɵComponentType<PageComponent>;
// const PageWithJump = pageWithJump.ɵcmp['type']; 

@Component({
  selector: 'fake',
  template: ''
})
export class PageWithJump { }
PageWithJump['ɵfac'] = pageWithJump['ɵfac'];
PageWithJump['ɵcmp'] = pageWithJump.ɵcmp;
PageWithJump['decorators'] = pageWithJump['decorators'];
PageWithJump['ctorParameters'] = pageWithJump['ctorParameters'];

// const PageWithJump = Object.assign( Object.create( Object.getPrototypeOf(type)), type)
// console.log(PageWithJump);
// const PageWithJump = pageWithJump.ɵcmp['type'];

@NgModule({
  declarations: [
    AppComponent,
    ClearAllSubscriptionComponent,
    PageComponent,
    PageWithJump,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
