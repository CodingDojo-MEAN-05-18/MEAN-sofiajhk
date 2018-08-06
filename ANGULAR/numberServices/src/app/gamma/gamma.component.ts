import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {
  sumDiff: number = 0;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  genDiff() {
    this.sumDiff = this._dataService.gammaGen();
    console.log("Seq1 - Seq2 =", this.sumDiff);
  }

}
