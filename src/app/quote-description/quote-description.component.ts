import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css']
})
export class QuoteDescriptionComponent implements OnInit {

  @Input() description : Quotes;
  @Output() deleteQuote = new EventEmitter<boolean>()

  removeQuote(remove:boolean){
    this.deleteQuote.emit(remove);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
