import { Component, OnInit } from '@angular/core';
import {Message, MessageUser} from '../../model/message';
import { QueryServices } from '../../services/query.services';
import { Router } from '@angular/router';
import { MessageService } from './../../services/message.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.scss']
})
export class ListMessagesComponent implements OnInit {
  messages: Message[];
  users:MessageUser[];

  constructor(    
    private queryServices: QueryServices,
    private router:Router,
    private messageService:MessageService
    ) { }

    ngOnInit() {
      this.refresh();
    }

    refresh() {
      this.messageService.getData().subscribe((messages: Message[])=>{
        this.messages = messages.filter((msg)=>{
          return msg.type == "message"
        });
        this.getUsers();        
      })

    }

    select(e){
      let param = e.target.name;
      
        this.router.navigate(['/message'], { queryParams: { name: param } });
      }

      getUsers(){
        this.queryServices.getUsers().subscribe((users:MessageUser[])=>{
          this.users = users;
          this.addUSerInfo();
        })
      }
    
      addUSerInfo(){
        this.messages.map((message)=>{
          let msgUser = message.username;
          this.users.map((user)=>{
            let userName = user.username;
            if(msgUser.toString() == userName.toString()){
              message.avatar = user.avatar
            }
          })
        })
      }
      
    
  }