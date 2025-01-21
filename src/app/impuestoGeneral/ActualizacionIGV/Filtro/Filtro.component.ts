import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'Filtro-root',
  templateUrl: './Filtro.component.html',
  styleUrls: ['./Filtro.component.scss'],
})
export class FiltroComponent implements OnInit {
  title = 'saldos-acumulados-frontend';
  motivoActualizacion :any[]=[{"codigo":"01", "valor":"Modificación del monto inicial del saldo acumulado"}];
  numeroRuc: string = "";
  listSaldoAcumulado: any[]=[{"codCuenta":"CA0001","desCuenta":"Pagos de Renta por Cuenta Propia"}];
  getFormFiltro: FormGroup;

  constructor(private fb: FormBuilder,private router: Router,) {
    this.getFormFiltro = this.fb.group({


    })
  }

  ngOnInit(): void {

  }



}
