import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyantwo',
  templateUrl: './supersaiyantwo.component.html',
  styleUrls: ['./supersaiyantwo.component.css']
})
export class SupersaiyantwoComponent implements OnInit, OnChanges {
  @Input() power;

  constructor() { }

  ngOnChanges() {
    this.power = this.power * 150;
  }

  ngOnInit() {
  }

}
