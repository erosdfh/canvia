import { NgModule } from '@angular/core';
import { ActualizacionIGVRoutingModule } from './ActualizacionIgv-routing.module';
import { ActualizacionIGVComponent} from './ActualizacionIgv.component';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TableModule } from 'primeng/table';
import { FiltroComponent } from './Filtro/Filtro.component';
import { ModSaldoIGVComponent } from './ModSaldoIGV/ModSaldoIGV.component';

@NgModule({
  declarations: [
    ActualizacionIGVComponent,
    FiltroComponent,
    ModSaldoIGVComponent
  ],
  imports: [
    ActualizacionIGVRoutingModule,
    CommonModule,
    NgSelectModule,
    NgbModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    TableModule
  ],
  providers: [],
  bootstrap: [ActualizacionIGVComponent]
})
export class ActualizacionIGVModule { }
