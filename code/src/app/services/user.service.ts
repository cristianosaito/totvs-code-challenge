import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Observable } from 'rxjs';
import { MessageUser } from "../model/message";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private data = new BehaviorSubject<MessageUser[]>([]);

  constructor() { }

  setData(users: MessageUser[]): void {    
    this.data.next(users);
  }

  getData(): Observable<MessageUser[]> {
    return this.data.asObservable();
  }
  
}
