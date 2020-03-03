import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ɵComponentType, Component, Type } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { ClearAllSubscriptionComponent } from './clear-all-subscription/clear-all-subscription.component';
import { fadeIn } from './hoc/functions/animation/fadeIn';
import { createComponent } from './hoc/createComponent';
import { withStyle } from './hoc/functions/withStyle';
import { withSelector } from './hoc/functions/withSelector';
import { FakeComponent } from './hoc/fake.component';

const pageWithJump = withSelector(PageComponent,'app-page-jump') as ɵComponentType<PageComponent>;

createComponent(FakeComponent, pageWithJump);

@NgModule({
  declarations: [
    AppComponent,
    ClearAllSubscriptionComponent,
    PageComponent,
    FakeComponent,
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
