import { Component } from '@angular/core';
import { BirdAdd } from '../models/bird-add';
import { BirdService } from '../bird/bird.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bird-add',
  templateUrl: './bird-add.component.html',
  styleUrl: './bird-add.component.css'
})
export class BirdAddComponent {

  name: string = "";
  info: string = "";
  url: string = "";
  color: string = "";
  secondaryColor: string = "";
  size: string = "";
  shape: string = "";
  habitat: string = "";

  constructor(
    private birdService: BirdService,
    private snackBar: MatSnackBar) {}

  onSubmit() {
    let birdAdd = new BirdAdd();
    birdAdd.name = this.name;
    birdAdd.info = this.info;
    birdAdd.habitat = this.habitat
    birdAdd.color = this.color;
    birdAdd.secondaryColor = this.secondaryColor;
    birdAdd.size = this.size;
    birdAdd.shape = this.shape;
    birdAdd.habitat = this.habitat;
    birdAdd.url = this.url;

    this.birdService.addBird(birdAdd).subscribe(() => {
      this.snackBar.open('Bird saved successfully!', 'X', {
        panelClass: 'noif-error',
        duration: 4000
      });
    });
  } 
}
