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
  shortDescription: string = "";
  imageUrl: string = "";
  colors: string = "";
  size: string = "";
  shape: string = "";
  habitats: string = "";

  disableAddButton: boolean = true;

  constructor(
    private birdService: BirdService,
    private snackBar: MatSnackBar) {}

  onInputChange() {
    this.disableAddButton =
      this.name === '' ||
      this.shortDescription === '' ||
      this.imageUrl === '' ||
      !this.colors ||
      this.size === '' ||
      this.shape === '' ||
      !this.habitats;
  }

  onSubmit() {
  let birdAdd = new BirdAdd();
  birdAdd.name = this.name;
  birdAdd.shortDescription = this.shortDescription;
  birdAdd.colors = this.colors.split('\n').map(c => c.trim()).filter(c => c);
  birdAdd.habitats = this.habitats.split('\n').map(h => h.trim()).filter(h => h);
  birdAdd.size = this.size;
  birdAdd.shape = this.shape;
  birdAdd.imageUrl = this.imageUrl;

    this.birdService.addBird(birdAdd).subscribe(result => {
      console.log('API result:', result);
      this.snackBar.open(result, 'X', {
        duration: 4000
      });
    },
    error => {
      const message = typeof error.error === 'string' && error.status === 400
        ? error.error
        : 'Error occurred while saving bird.';

      this.snackBar.open(message, 'X', { duration: 4000 });
  });
  }
}
