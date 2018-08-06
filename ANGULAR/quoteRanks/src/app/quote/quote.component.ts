import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor(
    public id: number = null,
    public author: string = "",
    public quote: string = "",
    public created_at: Date = new Date(),
    public updated_at: Date = new Date(),
  ) {}

  ngOnInit() {
  }

}