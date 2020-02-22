import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipDirective } from './tooltip.directive';
import { DragNDropDirective } from './drag-n-drop.directive';
import { PageComponent } from './page/page.component';
import { BubblyEffectDirective } from './bubbly-effect.directive';
import { ClearAllSubscriptionComponent } from './clear-all-subscription/clear-all-subscription.component';
import { WithRouterComponent } from './with-router/with-router.component';
import { jump } from './hoc/animation/jump';

const PageWithJump = jump(PageComponent, 'jump');

@NgModule({
  declarations: [
    AppComponent,
    TooltipDirective,
    DragNDropDirective,
    BubblyEffectDirective,
    ClearAllSubscriptionComponent,
    WithRouterComponent,
    // PageWithJump,
    PageComponent
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
