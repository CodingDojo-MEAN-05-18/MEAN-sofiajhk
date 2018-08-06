import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  /// using injected service, access the numbers property and set Beta's numbers array to same value
  numbers: number[] = [];

  constructor(private _dataService: DataService) { }

  // setting our Beta's numbers array to same value of DataService numbers array
  // as soon as BetaComponent loads (on initiailize, via the ngOnInit method)
  ngOnInit() {
    this.numbers = this._dataService.retrieveNumbers();
  }

}
