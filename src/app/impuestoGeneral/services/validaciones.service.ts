import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegexConstantes } from 'src/libs/constantes/storage/regex';

@Injectable()
export class ValidacionesService {

  private form: FormGroup;

  constructor(
    public fb: FormBuilder,
  ) {
    this.form = this.createForm();
    this.validarRuc = this.validarRuc.bind(this);
  }

  public createForm() {
    return this.fb.group({
      numRuc: [null, [Validators.pattern(/^[0-9]{11}$/), Validators.required]],
      nomRazonSocial: [{ value: null, disabled: true }, [Validators.required, Validators.maxLength(1500)]],
      dependencia: [null,Validators.required],
      saldoAcum: [null,Validators.required],
      rango: [null],
      monto: [null],
      periodoDesdeAnio: [null, Validators.required],
      periodoDesdeMes: [null, Validators.required],
      periodoHastaAnio: [null, Validators.required],
      periodoHastaMes: [null, Validators.required],
      archivo:[{value:null,disabled: true},Validators.required]
    }, {
      validators: [
        this.validarPeriodo.bind(this),
      ]
    })
  }

  public get getForm() {
    return this.form;
  }

  public get fieldNumRuc(): AbstractControl | null {
    return this.getForm.get('numRuc');
  }

  public get fieldNomRazonSocial() {
    return this.getForm.get('nomRazonSocial');
  }

  public get fieldDependencia() {
    return this.getForm.get('dependencia');
  }

  public get fieldSaldoAcum() {
    return this.getForm.get('saldoAcum');
  }

  public get fieldRango() {
    return this.getForm.get('rango');
  }

  public get fieldMonto() {
    return this.getForm.get('monto');
  }
public get fieldArchivo(){
  return this.getForm.get('archivo');
}

  public get fieldPeriodoDesdeAnio(): AbstractControl | null {
    return this.getForm.get('periodoDesdeAnio');
  }

  public get fieldPeriodoDesdeMes(): AbstractControl | null {
    return this.getForm.get('periodoDesdeMes');
  }

  public get fieldPeriodoHastaAnio(): AbstractControl | null {
    return this.getForm.get('periodoHastaAnio');
  }

  public get fieldPeriodoHastaMes(): AbstractControl | null {
    return this.getForm.get('periodoHastaMes');
  }

  private validarRuc(fieldNumRuc: FormControl) {
    const ruc = fieldNumRuc.value;
    if (ruc) {
      /*if (!isNumber(Number(ruc))) {
        return { rucInvalido: true };
      } else if (String(ruc).length !== 11) {
        return { rucInvalido: true };
      }*/
    }
    return null;
  }
  private validarPeriodo(form: FormGroup) {
    const periodoDesdeAnio = form.get('periodoDesdeAnio')?.value;
    const periodoDesdeMes = form.get('periodoDesdeMes')?.value;
    const periodoHastaAnio = form.get('periodoHastaAnio')?.value;
    const periodoHastaMes = form.get('periodoHastaMes')?.value;

    if (periodoDesdeAnio && periodoDesdeMes && periodoHastaAnio && periodoHastaMes) {
      const periodoDesde = periodoDesdeAnio + '' + periodoDesdeMes;
      const periodoHasta = periodoHastaAnio + '' + periodoHastaMes;
      const periodoActual = new Date().getFullYear() + (String(new Date().getMonth() + 1).padStart(2, '0'));
      const anioInicial = periodoDesdeAnio + '-' + periodoDesdeMes + "-" + "01";//new Date(periodoDesde+''+"01");
      var e = new Date(anioInicial)
      e.setMonth(e.getMonth() + 12);
      var anioFinal = new Date(periodoHastaAnio + '-' + periodoHastaMes + "-" + "01");
      if ((Number(periodoDesde) > Number(periodoHasta))) {
        return { validaPeriodoTributario: true };
      } else if ((Number(periodoHasta) > Number(periodoActual))) {
        return { validaPeriodoActual: true };
      } else if (anioFinal > e) {
        return { valida12Meses: true };
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  

}
