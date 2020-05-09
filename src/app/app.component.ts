import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QUOTEME'
  showQuote : any

  addNewQuote(myQuote : any){
    this.showQuote = myQuote;  
  }
}
