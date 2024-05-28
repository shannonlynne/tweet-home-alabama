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

  disableAddButton: boolean = true;

  constructor(
    private birdService: BirdService,
    private snackBar: MatSnackBar) {}

  onInputChange() {
    this.disableAddButton = this.name === '' || this.info === '' || this.url === '' 
    || this.color === '' || this.secondaryColor === '' || this.size === '' || this.shape === '' 
    || this.habitat === '' 
  }

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

    this.birdService.addBird(birdAdd).subscribe(result => {
      this.snackBar.open(result, 'X', {
        duration: 4000
      });
    }, 
      () => {
      this.snackBar.open('Error occured while saving bird.', 'X', {
        duration: 4000
      });
    });
  }
} 
