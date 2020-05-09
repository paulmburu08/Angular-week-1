import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quoteme',
  templateUrl: './quoteme.component.html',
  styleUrls: ['./quoteme.component.css']
})
export class QuotemeComponent implements OnInit {
  showQuotes : Quotes[] = [
    new Quotes('Willias Liam',' If life were predictable it would cease to be life and be without flavor','Eleanor Roosevelt'),
    new Quotes('Ken John','he greatest glory in living lies not in never falling, but in rising every time we fall','Nelson Mandela')
  ]

  addNewQuote(myQuote : any){
    this.showQuotes.push(myQuote);  
  }

  toggleDetails(index){
    this.showQuotes[index].showDescription = !this.showQuotes[index].showDescription;
  }

  yesDelete(deleteQuote,index){
    if(deleteQuote){
      this.showQuotes.splice(index,1)
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
