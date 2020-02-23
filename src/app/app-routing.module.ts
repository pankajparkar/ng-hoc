import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { withRoute } from './hoc/functions/withRoute';
import { jump } from './hoc/functions/animation/jump';
import { withTooltip } from './hoc/functions/withTooltip';

const routes: Routes = [
  {path: 'page', component: PageComponent},
  // {path: 'page', component: withTooltip(jump(withRoute(PageComponent)))},
  // {path: '**', redirectTo: 'page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
