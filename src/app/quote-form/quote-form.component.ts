import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  userQuote = new Quotes("","","",new Date());
  @Output() finalQuote = new EventEmitter<Quotes>();

  onSubmit(){
    this.finalQuote.emit(this.userQuote);
    this.userQuote = new Quotes("","","",new Date());
  }
  constructor() {

   }

  ngOnInit(): void {
    
  }

}
