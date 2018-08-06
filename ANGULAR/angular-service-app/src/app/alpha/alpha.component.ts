import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  // using injected service, access the numbers property and set Alpha's numbers array to same value
  numbers: number[] = [];

  constructor(private _dataService: DataService) { }

  // setting our Alpha's numbers array to same value of DataService numbers array
  // as soon as AlphaComponent loads (on initiailize, via the ngOnInit method)
  ngOnInit() {
    this.numbers = this._dataService.retrieveNumbers();
  }

  pushOne() {
    this._dataService.addNumber(1);
  }

}
