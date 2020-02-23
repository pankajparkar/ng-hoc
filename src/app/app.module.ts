import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA, ɵComponentType, ɵɵproperty, ɵRenderFlags, ɵɵelement, ɵɵdefineComponent, ChangeDetectionStrategy } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { ClearAllSubscriptionComponent } from './clear-all-subscription/clear-all-subscription.component';
import { jump } from './hoc/functions/animation/jump';
import { createComponent } from './hoc/functions/createComponent';

const pageWithJump = jump(PageComponent) as ɵComponentType<PageComponent>;

@Component({
  selector: 'app-page-jump',
  template: ''
})
export class PageWithJump { }

// export class ManualComponent {
//   static ngComponentDef = ɵɵdefineComponent(ɵɵdefineComponent({
//     consts: [[]],
//     vars: 1,
//     decls: 1,
//     directives: [
//       // inner
//     ],
//     changeDetection: ChangeDetectionStrategy.Default,
//     selectors: [[]],
//     template: (rf, ctx) => {
//         if (rf & ɵRenderFlags.Create) {
//            ɵɵelement(0, 'div', null);
//         }
//     },
//     type: ManualComponent,
//   }));
// }

// 'app-page-jump'
// const PageWithJump = 
createComponent(PageWithJump, pageWithJump);

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
