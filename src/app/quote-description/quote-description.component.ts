import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css']
})
export class QuoteDescriptionComponent implements OnInit {

  numberOfLikes : number = 0;
  numberOfDislikes : number = 0;
  date = new Date();
  public datewithoutTime = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate());

  @Input() description : Quotes;
  @Output() deleteQuote = new EventEmitter<boolean>()

  removeQuote(remove:boolean){
    this.deleteQuote.emit(remove);
  }

  likeButton(){
    this.numberOfLikes++;
  }

  dislikeButton(){
    this.numberOfDislikes++;
  }
  constructor() { }

  ngOnInit(): void {
  
  }

}
