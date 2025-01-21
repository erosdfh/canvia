import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdministrarManualeventoService } from './administrar-manualevento.service';
@Component({
  selector: 'Evt47-root',
  templateUrl: './Evt47.component.html',
  styleUrls: ['./Evt47.component.scss'],
  providers: [AdministrarManualeventoService],
})
export class Evt47Component implements OnInit {
  title = 'saldos-acumulados-frontend';
  public sinData = 'No se encontró información';

  listaTipoEvento = [];
  // manualEventoForm: FormGroup;
  constructor(public manualEventoForm: AdministrarManualeventoService) {}

  ngOnInit(): void {
    this.cargarCombo();
  }

  private cargarCombo(): void {
    console.log('Data 01');
    this.manualEventoForm.listaTipoEvento.subscribe((data) => {
      console.log('Data list evento', data);
      /* this.listaTipoEvento=data;
      this.manualEventoForm.field.setValue([this.listaTipoEvento[0].codigo]);*/
    });
  }

  public selectChekedCombosTipoEvento(): boolean {
    return true;
  }

  public toggleCheckAllCombosTipoEvento(event: any): void {
    event.stopPropagation();
    /*  if (event.currentTarget.checked) {
      this.consultasForm.fieldTipoEvento?.setValue(this.listaTipoEvento.map(x => x.codigo), { emitEvent: false });
    } else {
      this.consultasForm.fieldTipoEvento?.setValue(null, { emitEvent: false });
    }*/
  }
}
