import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BirdAdd } from '../models/bird-add';
import { BirdService } from '../bird/bird.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-bird-search',
  templateUrl: './bird-search.component.html',
  styleUrl: './bird-search.component.css'
})
export class BirdSearchComponent {

  birdSearchForm: FormGroup = new FormGroup({});
  displayedColumns: string [] = ["name", "info", "imageUrl"];
  dataSource = new MatTableDataSource();

  constructor(
    private formBuilder: FormBuilder,
    private birdService: BirdService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
      this.birdSearchForm = this.formBuilder.group({
        color: ['', Validators.required],
        secondaryColor: ['', Validators.required],
        size: ['', Validators.required],
        shape: ['', Validators.required],
        habitat: ['', Validators.required],
      })
    }

  onSubmit() {

  }
}
