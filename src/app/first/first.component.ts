import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';  
import { Tutorial } from '../model/tutorial.model';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  tutorial: Tutorial = new Tutorial();
  submitted = false;

  constructor(private tutorialService: DatabaseService) { }

  saveTutorial(): void {
    this.tutorialService.create(this.tutorial).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = new Tutorial();
  }


}
