import { Component } from '@angular/core';
import { BirdService } from '../bird/bird.service';
import { MatTableDataSource } from '@angular/material/table';
import { BirdSearch } from '../models/bird-search';

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

  constructor(private birdService: BirdService) {}

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
    });
  }
}
