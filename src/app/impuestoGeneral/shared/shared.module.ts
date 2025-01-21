import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalDescargarComponent } from './components/modal-descargar/modal-descargar.component';
import { ModalColumnasComponent } from './components/modal-columnas/modal-columnas.component';
import { PaginacionComponent } from './components/paginacion/paginacion.component';
import { SelectorCantidadRegistrosComponent } from './components/selector-cantidad-registros/selector-cantidad-registros.component';
import { ResizableComponent } from './components/resizable/resizable.component';
import { MyResizeDirective } from './my-resize.directive';
const COMPONENTS = [
  PaginacionComponent,
  ModalDescargarComponent,
  ModalColumnasComponent,
  SelectorCantidadRegistrosComponent,
  ResizableComponent,
  MyResizeDirective
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class SharedModule { }
