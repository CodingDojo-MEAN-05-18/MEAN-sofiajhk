import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  seq2: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  genSeq2() {
    this.seq2 = this._dataService.betaGen();
    console.log("Sequence 2:", this.seq2);
  }

}
