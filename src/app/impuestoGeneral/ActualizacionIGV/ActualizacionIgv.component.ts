import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ValidacionesService } from '../services/validaciones.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'ActualizacionIGV-root',
  templateUrl: './ActualizacionIgv.component.html',
  styleUrls: ['./ActualizacionIgv.component.scss'],
  providers: [ValidacionesService]
})
export class ActualizacionIGVComponent implements OnInit {
  title = 'saldos-acumulados-frontend';
  listaComponente:any[]=[{"codigo":"IGV", "valor":"IGV"}];
  listaMotivo:any[]=[{"codigo":"01", "valor":"Modificación del monto inicial del saldo acumulado"},
    {"codigo":"02", "valor":"Pago anulado"},
    {"codigo":"03", "valor":"Resolución de determinación"},
    {"codigo":"04", "valor":"Cambio de veredicto de aceptado a rechazado"},
    {"codigo":"05", "valor":"Cambio de veredicto de rechazado a aceptado"}
  ];
  getForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router,) {
    this.getForm = this.fb.group({
      componente: ['', [Validators.required]],
      motivo: ['', [Validators.required]],
    });
  }
  
  ngOnInit(): void {

  }
  selComp(){

  }

  aceptar(){
    console.log("aceptarr")
    this.router.navigate(["actualizacion-IGV/filtro"]);
  }
  
   
}
