import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessagesComponent } from './components/messages/messages.component';
import { PostMessageComponent } from './components/post-message/post-message.component'
import { FormTypeAComponent } from './components/form-type-a/form-type-a.component';
import { FormTypeBComponent } from './components/form-type-b/form-type-b.component';

const routes: Routes = [
 
  {path:'',component:MessagesComponent,
  children: [
    { path: 'message', loadChildren:()=> import("./modules/lazyloading/lazyloading.module").then(m => m.LazyloadingModule) },
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
