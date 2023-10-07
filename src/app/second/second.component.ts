import { Component } from '@angular/core';


export interface getLoan {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
 
})
export class SecondComponent {

  loans: getLoan[] = [
    {value: 'steak-0', viewValue: 'Microloan'},
    {value: 'pizza-1', viewValue: 'Corporate'},
    {value: 'tacos-2', viewValue: 'Startup'}
  ];

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }



}
