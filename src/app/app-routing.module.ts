import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirdSearchComponent } from './bird-search/bird-search.component';
import { BirdAddComponent } from './bird-add/bird-add.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"search", component:BirdSearchComponent},
  {path:"add", component:BirdAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
