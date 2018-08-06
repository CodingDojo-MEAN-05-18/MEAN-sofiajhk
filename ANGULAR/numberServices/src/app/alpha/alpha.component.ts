import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  seq1: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {

  }

  genSeq1() {
    this.seq1 = this._dataService.alphaGen();
    console.log("Sequence 1:", this.seq1);
  }
}
