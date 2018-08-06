import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  randNum: number;
  alphaArr: number[] = [];
  betaArr: number[] = [];
  gamma: number;

  constructor() { }

  getRand(): number{
    this.randNum = Math.floor(Math.random() * 10) +1;
    console.log("Random Number:", this.randNum);
    return this.randNum;
  }

  // push random number to AlphaComponent numbers array
  alphaGen(): number[] {
    this.randNum = this.getRand();
    this.alphaArr.push(this.randNum);
    console.log(this.alphaArr);
    return this.alphaArr;
  }

  // push random number to BetaComponent numbers array
  betaGen(): number[] {
    this.randNum = this.getRand();
    this.betaArr.push(this.randNum);
    console.log(this.betaArr);
    return this.betaArr;
  }


  gammaGen(): number {
    let alphaSum: number = 0;
    let betaSum: number = 0;

    for (let num of this.alphaArr){
      alphaSum += num;
    }

    for (let num of this.betaArr){
      betaSum += num;
    }

    this.gamma = (alphaSum - betaSum);
    console.log(this.gamma);
    return this.gamma;
  }

}
