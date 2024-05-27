import { Component } from '@angular/core';
import { BirdService } from '../bird/bird.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Bird } from '../models/bird';
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

  constructor(
    private birdService: BirdService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
  }

  onSubmit() {
    let birdSearch = new BirdSearch();
    birdSearch.color = this.color;
    birdSearch.secondaryColor = this.secondaryColor;
    birdSearch.size = this.size;
    birdSearch.shape = this.shape;
    birdSearch.habitat = this.habitat;
  }
}
