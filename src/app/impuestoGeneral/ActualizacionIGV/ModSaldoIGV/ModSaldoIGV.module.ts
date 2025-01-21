import { NgModule } from '@angular/core';
import { ModSaldoIGVComponent } from './ModSaldoIGV.component';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TableModule } from 'primeng/table';
import { SharedModule } from '../../shared/shared.module';
import { ModSaldoIGVRoutingModule } from './ModSaldoIGV-routing.module';

@NgModule({
  declarations: [ModSaldoIGVComponent],
  imports: [
    ModSaldoIGVRoutingModule,
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
  bootstrap: [ModSaldoIGVComponent],
})
export class ModSaldoIGVModule {}
