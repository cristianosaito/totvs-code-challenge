import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Observable } from 'rxjs';
import { Message } from "../model/message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private data = new BehaviorSubject<Message[]>([]);

  constructor() { }

  setData(messages: Message[]): void {    
    this.data.next(messages);
  }

  getData(): Observable<Message[]> {
    return this.data.asObservable();
  }
}
