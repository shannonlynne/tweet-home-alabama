import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bird } from '../models/bird';
import { BirdTraits } from '../models/bird-add';
import { BirdService } from '../bird/bird.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bird-search',
  templateUrl: './bird-search.component.html',
  styleUrl: './bird-search.component.css'
})
export class BirdSearchComponent {

  birdSearchForm: FormGroup = new FormGroup({});

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
