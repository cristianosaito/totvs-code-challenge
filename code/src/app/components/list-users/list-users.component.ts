import { Component, OnInit } from '@angular/core';
import { QueryServices } from '../../services/query.services';
import {Message, MessageUser} from '../../model/message';
import { UserService } from "../../services/user.service";


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users: MessageUser[];

  constructor(    
    private queryServices: QueryServices,
    private userService:UserService,
    ) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.userService.getData().subscribe((users: MessageUser[])=>{
      this.users = users;
    })
  }
}