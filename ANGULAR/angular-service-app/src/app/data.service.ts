import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // property of 'numbers' which will be an array of numbers
  numbers: number[] = [1,2,3]

    constructor() { }

    // method #1: 'retrieveNumbers()' will return the 'numbers'
    retrieveNumbers(): number[] {
      return this.numbers;
    }

    // method #2: 'addNumber()' will expect a parameter and push a number in the 'numbers' array
    addNumber(num: number) {
      this.numbers.push(num);
    }
}
