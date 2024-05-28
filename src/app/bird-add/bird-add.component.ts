import { Component } from '@angular/core';
import { BirdAdd } from '../models/bird-add';
import { BirdService } from '../bird/bird.service';
import { MatSelectChange } from '@angular/material/select';
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

    // ngOnInit(): void {
    // }

  onSubmit() {
    let birdAdd = new BirdAdd();
    birdAdd.color = this.color;
    birdAdd.secondaryColor = this.secondaryColor;
    birdAdd.size = this.size;
    birdAdd.shape = this.shape;
    birdAdd.habitat = this.habitat;

    this.birdService.addBird(birdAdd).subscribe(() => {
      this.snackBar.open('Bird saved successfully!', 'X', {
        panelClass: 'noif-error',
        duration: 4000
      });
    });
  } 
}
