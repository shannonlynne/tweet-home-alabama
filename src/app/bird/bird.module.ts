import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdSearchComponent } from './bird-search/bird-search.component';
import { BirdAddComponent } from './bird-add/bird-add.component';

@NgModule({
  declarations: [
    BirdSearchComponent,
    BirdAddComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BirdSearchComponent,
    BirdAddComponent
  ]
})
export class BirdModule { }
