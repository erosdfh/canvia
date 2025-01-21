import { NgModule } from '@angular/core';
import { Evt47RoutingModule } from './Evt47-routing.module';
import { Evt47Component } from './Evt47.component';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [Evt47Component],
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
  bootstrap: [Evt47Component],
})
export class Evt47Module {}
