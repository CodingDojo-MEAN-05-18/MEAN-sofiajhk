import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  constructor(
    public id: number = null,
    public author: string = "",
    public quote: string = "",
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}

  ngOnInit() {
  }

}