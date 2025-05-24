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
  colors: string = "";
  size: string = "";
  shape: string = "";
  habitats: string = "";

  disableSearchButton: boolean = true;

  constructor(
    private birdService: BirdService,
    private snackBar: MatSnackBar) {}

onInputChange() {
  const colorList = this.colors
    .split('\n')
    .map(c => c.trim())
    .filter(c => c.length > 0);

  const habitatList = this.habitats
    .split('\n')
    .map(h => h.trim())
    .filter(h => h.length > 0);

    this.disableSearchButton =
    colorList.length === 0 ||
    habitatList.length === 0 ||
    this.size === '' ||
    this.shape === '';
}

  onSubmit() {
    let birdSearch = new BirdSearch();
    birdSearch.colors = this.colors;
    birdSearch.size = this.size;
    birdSearch.shape = this.shape;
    birdSearch.habitats = this.habitats;

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
