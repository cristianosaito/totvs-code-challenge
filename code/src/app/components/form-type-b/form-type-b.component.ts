import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Message, MessageUser} from '../../model/message';
import { QueryServices } from '../../services/query.services';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-form-type-b',
  templateUrl: './form-type-b.component.html',
  styleUrls: ['./form-type-b.component.scss']
})
export class FormTypeBComponent implements OnInit {

  form:FormGroup;
  sliderValue = 0;
  companyValue = 0;
  @Input() name:string;

  constructor(
    private formBuilder: FormBuilder,
    private queryService:QueryServices,
    private messageService:MessageService
    ) {
    this.formConfig();
  }

  ngOnInit(): void {

  }

  formConfig(){
    this.form = this.formBuilder.group({
      name: [this.name, Validators.required],
      companyName:['', Validators.required],
      companyEvaluation:['', Validators.required],
      shareOffering: ['', [Validators.required]],
      sharePrice:[''],
      comment: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  setPrice(){
    let totalPrice=(this.companyValue*this.sliderValue/100);
    this.form.patchValue({
      sharePrice:totalPrice
    });
  }

  enviar(){  
    let values = this.form.value;  
    let msg:Message = {
      type : "pitch",
      companyName : values.companyName,
      text : values.comment,
      username : values.name,
      evaluation: values.companyEvaluation,
      offerSharesPercent: values.shareOffering,
      offerSharesPrice:values.sharePrice
    }
    this.queryService.saveMessage(msg).subscribe((resp)=>{
      console.log(resp);
    });
    this.form.reset();
    this.getMessages();
  }

  getMessages(){
    this.queryService.getMessages().subscribe((messages: Message[]) => {
      this.messageService.setData(messages);
    });
  }

}
