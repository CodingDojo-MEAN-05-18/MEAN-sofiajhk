import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  amount: number = 0;

  // sumGold observable sends gold sum updates to child components
  sumGold: BehaviorSubject<number> = new BehaviorSubject(this.amount);
  logHistory: Object[] = [];

  collect(building): BehaviorSubject<number> {
    if (building == 'farm') {
      this.amount = Math.floor(Math.random() * 3) + 2;
    } else if (building == 'cave') {
      this.amount = Math.floor(Math.random() * 5) +5;
    } else if (building == 'casino') {
      this.amount = Math.floor(Math.random() * 100)
      
    } else if (building == 'house') {
      this.amount = Math.floor(Math.random() * 8) +7;
    }
  }


  constructor() { }
}
