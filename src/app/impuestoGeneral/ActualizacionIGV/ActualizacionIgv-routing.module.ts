import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizacionIGVComponent } from './ActualizacionIgv.component';

const routes: Routes = [
  {
    path: '', component:  ActualizacionIGVComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActualizacionIGVRoutingModule { }
