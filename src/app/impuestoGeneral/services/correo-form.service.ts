import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { GeneralesService } from './services';
import { ModalService } from './modal.service';

@Injectable()
export class CorreoFormService {

  public formCorreo: FormGroup;
  correoValido:boolean=false;
  correo = {
    correos: [{ email: '' }]
  }
  exprecionCorreo = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}(;[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})*$";
  constructor(private fb: FormBuilder,
    public spinner: NgxSpinnerService,
    public service: GeneralesService, public modalService:ModalService) {
    this.formCorreo = this.crearFormulario();
  }

  form: FormGroup = this.fb.group({
    correos: this.buildContacts(this.correo.correos)
  });
  
  public crearFormulario(): FormGroup {
    return this.fb.group({
      email: ["",Validators.pattern(this.exprecionCorreo)],
    });
  }

  buildContacts(correos: { email: string }[] = []) {
    return this.fb.array(correos.map(correo => this.fb.group(correo)));
  }

  public get getForm(): FormGroup {
    return this.formCorreo;
  }

  public get fieldEmail(): AbstractControl | null {
    return this.formCorreo.get('correos');
  }
  get getValidarEmail(): boolean {
    return this.formCorreo.hasError('emailError')
  }
 

}
