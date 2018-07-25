import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  emails: Object[] = [
    {email: 'Bill@gates.com', importance: true, subject: 'New Windows', content: 'WIndows XI will launce in 2100.'},
    {email: 'Ada@lovelace.com', importance: true, subject: 'Programming', content: 'Echanctress of Numbbers.'},
    {email: 'John@carmac.com', importance: false, subject: 'Updated Algo', content: 'New Algorithm for shadow volumes.'},
    {email: 'Gabe@newel.com', importance: false, subject: 'HL3!', content: 'Just Kidding...'}
  ]

}
