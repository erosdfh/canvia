import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { RegistromanualeventoService } from '../services/registromanualevento.service';

@Injectable({
  providedIn: 'root',
})
export class AdministrarManualeventoService {
  private saldosAcumuladosForm: FormGroup;
  listaTipoEvento = new Subject<[{ codigo: string; value: string }]>();

  constructor(
    private fb: FormBuilder,
    public registromanualevento: RegistromanualeventoService
  ) {
    this.saldosAcumuladosForm = this.createFormulario();
  }

  private createFormulario(): FormGroup {
    return this.fb.group(
      {
        tipoevento: [[]],
      },
      {
        validators: [this.validaFechaEvento.bind(this)],
      }
    );
  }

  private validaFechaEvento(form: FormGroup) {}

  public get getForm(): FormGroup {
    return this.saldosAcumuladosForm;
  }
}
