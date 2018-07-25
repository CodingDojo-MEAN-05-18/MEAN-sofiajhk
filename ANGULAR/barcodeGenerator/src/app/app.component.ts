import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colorArray = [];

  fillArray(){
    for (let x = 0; x < 10; x++){
      const randNum = (Math.floor(Math.random()*6)) +1;
      if (randNum ==  1){
        this.colorArray.push('LightBlue');
      } else if (randNum == 2){
        this.colorArray.push('LightCoral');
      } else if (randNum == 3){
        this.colorArray.push('LightCyan');
      } else if (randNum == 4){
        this.colorArray.push('LightPink');
      } else if (randNum == 5){
        this.colorArray.push('MistyRose');
      } else if (randNum == 6){
        this.colorArray.push('LightGreen');
      } else if (randNum == 7){
        this.colorArray.push('MediumAquaMarine');
      } 
    }
  }
  
  // ngOninit() method can take in additional initilization tasks such as initiating the fillArray function!
  ngOnInit(){
    this.fillArray();
  }

}
