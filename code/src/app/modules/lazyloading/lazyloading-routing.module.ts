import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostMessageComponent } from '../../components/post-message/post-message.component'

const routes: Routes = [
  {path:'',component:PostMessageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
