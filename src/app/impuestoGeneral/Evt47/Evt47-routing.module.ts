import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Evt47Component } from './Evt47.component';

const routes: Routes = [
  {
    path: '', component:  Evt47Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Evt47RoutingModule { }
