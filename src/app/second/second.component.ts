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

  loans = ['Microloan', 'Startup', 'Car', 'Corporate'];
  
  // Define a selected fruit (optional)
  selectedLoan: string = '';

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }



}
