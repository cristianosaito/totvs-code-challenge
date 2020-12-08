import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageProvider } from 'src/app/message.provider';
import { QueryServices } from 'src/app/services/query.services';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-message',
  templateUrl: 'post-message.component.html',
  styleUrls: ['post-message.component.scss']
})
export class PostMessageComponent implements OnInit {

  name='';

  isOpen: boolean;
  message: Message;

  private subscriptions = new Subscription();

  formA = true;
  formB = false;

  constructor(
    private messageProvider: MessageProvider,
    private queryServices: QueryServices,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params.name;
    }
  );
  }

  showFormA(){
    this.formA = true;
    this.formB = false;
  }

  showFormB(){
    this.formA = false;
    this.formB = true;

  }

  close(){
    this.router.navigateByUrl('/');
  }
}
