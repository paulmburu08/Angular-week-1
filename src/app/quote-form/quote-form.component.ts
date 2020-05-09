import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  userQuote = new Quotes(1,"","","");
  @Output() finalQuote = new EventEmitter<Quotes>();

  onSubmit(){
    this.finalQuote.emit(this.userQuote);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
