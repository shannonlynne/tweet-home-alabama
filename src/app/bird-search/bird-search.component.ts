import { Component } from '@angular/core';
import { BirdService } from '../bird/bird.service';
import { MatTableDataSource } from '@angular/material/table';
import { BirdSearch } from '../models/bird-search';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bird-search',
  templateUrl: './bird-search.component.html',
  styleUrl: './bird-search.component.css'
})
export class BirdSearchComponent {

  displayedColumns: string [] = ["name", "info", "url"];
  dataSource = new MatTableDataSource();
  color: string = "";
  secondaryColor: string = "";
  size: string = "";
  shape: string = "";
  habitat: string = "";

  disableSearchButton: boolean = true;

  constructor(
    private birdService: BirdService,
    private snackBar: MatSnackBar) {}

    onInputChange() {
      this.disableSearchButton = this.color === '' || this.secondaryColor === '' || this.size === '' 
      || this.shape === '' || this.habitat === '' 
    }

  onSubmit() {
    let birdSearch = new BirdSearch();
    birdSearch.color = this.color;
    birdSearch.secondaryColor = this.secondaryColor;
    birdSearch.size = this.size;
    birdSearch.shape = this.shape;
    birdSearch.habitat = this.habitat;

    this.birdService.getMatchingBirds(birdSearch).subscribe(birdList => {
      this.dataSource = new MatTableDataSource<any>();
      this.dataSource.data = birdList;  
    }, 
    () => {
      this.snackBar.open('Error occured while retrieving birds.', 'X', {
        duration: 4000
      });
    });
  }
}
