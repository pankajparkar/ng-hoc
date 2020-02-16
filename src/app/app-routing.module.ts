import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { withRoute } from './hoc/withRoute';
import { jump } from './hoc/animation/jump';

const routes: Routes = [
  {path: 'page', component: jump(withRoute(PageComponent))},
  {path: '**', redirectTo: 'page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
