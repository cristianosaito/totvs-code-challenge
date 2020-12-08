import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Message, MessageUser} from '../../model/message';
import { QueryServices } from '../../services/query.services';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-form-type-a',
  templateUrl: './form-type-a.component.html',
  styleUrls: ['./form-type-a.component.scss']
})
export class FormTypeAComponent implements OnInit {

  form:FormGroup;
  @Input() name:string;

  constructor(
    private formBuilder: FormBuilder,
    private queryServices:QueryServices,
    private messageService:MessageService
    ) {
    this.formConfig();
  }


  ngOnInit(): void {
    
  }

  formConfig(){
    this.form = this.formBuilder.group({
      name: [this.name, Validators.required],
      comment: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  enviar(){
    let values = this.form.value;
    let msg:Message = {
      type : "message",
      text : values.comment,
      username : values.name,
    }
    this.queryServices.saveMessage(msg).subscribe((resp)=>{
      console.log(resp);
    });
    this.form.reset();
    this.getMessages();
  }

  getMessages(){
    this.queryServices.getMessages().subscribe((messages: Message[]) => {
      this.messageService.setData(messages);
    });
  }

}
