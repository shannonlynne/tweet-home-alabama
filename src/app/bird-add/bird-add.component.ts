import { Component } from '@angular/core';
import { BirdAdd } from '../models/bird-add';
import { BirdService } from '../bird/bird.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Bird } from '../models/bird';

@Component({
  selector: 'app-bird-add',
  templateUrl: './bird-add.component.html',
  styleUrl: './bird-add.component.css'
})
export class BirdAddComponent {

  dataSource = new MatTableDataSource();
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
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
    }

  onSubmit() {
    let birdAdd = new BirdAdd();
    birdAdd.color = this.color;
    birdAdd.secondaryColor = this.secondaryColor;
    birdAdd.size = this.size;
    birdAdd.shape = this.shape;
    birdAdd.habitat = this.habitat;
  }
}
