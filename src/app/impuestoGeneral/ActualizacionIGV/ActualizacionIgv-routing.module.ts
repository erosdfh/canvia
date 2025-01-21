import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizacionIGVComponent } from './ActualizacionIgv.component';
import { FiltroComponent } from './Filtro/Filtro.component';

const routes: Routes = [
  {
    path: '', component:  ActualizacionIGVComponent
  },
  {
    path: 'filtro', component:  FiltroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActualizacionIGVRoutingModule { }
