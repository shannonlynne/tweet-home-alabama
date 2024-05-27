import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bird } from '../models/bird';
import { BirdAdd } from '../models/bird-add';
import { BirdService } from '../bird/bird.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bird-add',
  templateUrl: './bird-add.component.html',
  styleUrl: './bird-add.component.css'
})
export class BirdAddComponent {

  birdAddForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private birdService: BirdService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
      this.birdAddForm = this.formBuilder.group({
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
