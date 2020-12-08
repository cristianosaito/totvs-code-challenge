import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageProvider } from '../../message.provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();

  messagesCount: number;

  constructor(
    private messageProvider: MessageProvider,
    private router:Router,

  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.messageProvider.messagesCount$.subscribe(count => this.messagesCount = count)
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  postMessage() {
    //this.messageProvider.postMessage$.next();
    this.router.navigateByUrl('/message');
  }


}
