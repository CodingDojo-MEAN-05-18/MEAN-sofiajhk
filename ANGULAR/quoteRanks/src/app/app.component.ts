import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuoteComponent } from './quote/quote.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Add a Quote';
  newQuote = new QuoteComponent();
  // newQuote = { quote: '', author: '', rating: 0 };
  quotes = [];
  submitted;
  
  onSubmit(myForm) {
    console.log("it works");
    console.log(this.newQuote);
    this.quotes.push(this.newQuote);
    this.submitted = this.newQuote;
    this.newQuote = new QuoteComponent();
    console.log(this.quotes);
    // this.newQuote = { quote: '', author: '', rating: 0 };
  }
}