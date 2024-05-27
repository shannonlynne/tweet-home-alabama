import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdSearchComponent } from '../bird-search/bird-search.component';
import { BirdAddComponent } from '../bird-add/bird-add.component';
import { HomeModule } from '../home/home.module';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  declarations: [
    BirdSearchComponent,
    BirdAddComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule,
    FormsModule,
    AngularMaterialModule
  ]
})
export class BirdModule { }
