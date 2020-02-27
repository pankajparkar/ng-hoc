import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ɵComponentType } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { ClearAllSubscriptionComponent } from './clear-all-subscription/clear-all-subscription.component';
import { jump } from './hoc/functions/animation/jump';
import { createComponent } from './hoc/createComponent';
import { withStyle } from './hoc/functions/withStyle';
import { withSelector } from './hoc/functions/withSelector';
import { FakeComponent } from './hoc/fake.component';

const pageWithJump = withSelector(withStyle(jump(PageComponent), {
  style: `
    .test[_ngcontent-%COMP%] {
      background: green;
    }
  `
}), 'app-page-jump') as ɵComponentType<PageComponent>;

const Test = FakeComponent;

createComponent(Test, pageWithJump);

@NgModule({
  declarations: [
    AppComponent,
    ClearAllSubscriptionComponent,
    PageComponent,
    Test,
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
