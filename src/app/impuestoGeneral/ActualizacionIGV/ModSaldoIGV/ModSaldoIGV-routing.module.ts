import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModSaldoIGVComponent } from './ModSaldoIGV.component';

const routes: Routes = [
  {
    path: '', component:  ModSaldoIGVComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModSaldoIGVRoutingModule { }
