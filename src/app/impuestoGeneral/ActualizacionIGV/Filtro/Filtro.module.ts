import { NgModule } from '@angular/core';
import { Evt47RoutingModule } from './Filtro-routing.module';
import { FiltroComponent } from './Filtro.component';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TableModule } from 'primeng/table';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [FiltroComponent],
  imports: [
    Evt47RoutingModule,
    CommonModule,
    NgSelectModule,
    NgbModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [FiltroComponent],
})
export class Evt47Module {}
