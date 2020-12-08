import { Component, OnInit } from '@angular/core';
import { QueryServices } from '../../services/query.services';
import {Message, MessageUser} from '../../model/message';
import { Router } from '@angular/router';
import { MessageService } from './../../services/message.service';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-messages',
  templateUrl: 'messages.component.html',
  styleUrls: ['messages.component.scss']
})

export class MessagesComponent implements OnInit {

  users: MessageUser[];

  showUserList:boolean = false;
  showMsgList:boolean = false;
  showPitchList:boolean = true;

  constructor(
    private queryServices: QueryServices,
    private router:Router,
    private messageService:MessageService,
    private userService:UserService
  ) {}

  ngOnInit() {
    this.getUsers();
    this.getMessages();
  }

  getUsers() {
    this.queryServices.getUsers().subscribe((users: MessageUser[]) => {
      this.userService.setData(users);
    });
  }

  getMessages(){
    this.queryServices.getMessages().subscribe((messages: Message[]) => {
      this.messageService.setData(messages);
    });
  }

  showUsers(){
    this.showUserList = true;
    this.showPitchList = false;
    this.showMsgList = false;
  }

  showMessages(){
    this.showUserList = false;
    this.showPitchList = false;
    this.showMsgList = true;
  }

  showPitches(){
    this.showUserList = false;
    this.showPitchList = true;
    this.showMsgList = false;
  }

  postMessage() {
    //this.messageProvider.postMessage$.next();
    this.router.navigateByUrl('/message');
  }
}
