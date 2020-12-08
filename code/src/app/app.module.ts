import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PostMessageComponent } from './components/post-message/post-message.component';
import { MessageProvider } from './message.provider';
import { FormTypeAComponent } from './components/form-type-a/form-type-a.component';
import { FormTypeBComponent } from './components/form-type-b/form-type-b.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListMessagesComponent } from './components/list-messages/list-messages.component';
import { ListPitchsComponent } from './components/list-pitchs/list-pitchs.component';
import { LazyloadingModule } from './modules/lazyloading/lazyloading.module';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    HeaderComponent,
    PostMessageComponent,
    FormTypeAComponent,
    FormTypeBComponent,
    ListUsersComponent,
    ListMessagesComponent,
    ListPitchsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LazyloadingModule,
    
  ],
  providers: [MessageProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
