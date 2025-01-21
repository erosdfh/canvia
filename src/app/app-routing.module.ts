import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'actualizacion-IGV', loadChildren: () => import('./impuestoGeneral/ActualizacionIGV/ActualizacionIgv.module').then(m => m.ActualizacionIGVModule) },
  {path: 'evt-47', loadChildren: () => import('./impuestoGeneral/Evt47/Evt47.module').then(m => m.Evt47Module) },
  {
    path: '**',
    redirectTo: 'actualizacion-IGV'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
