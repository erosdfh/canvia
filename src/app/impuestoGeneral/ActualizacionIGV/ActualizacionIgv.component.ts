import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ValidacionesService } from '../services/validaciones.service';
@Component({
  selector: 'ActualizacionIGV-root',
  templateUrl: './ActualizacionIgv.component.html',
  styleUrls: ['./ActualizacionIgv.component.scss'],
  providers: [ValidacionesService]
})
export class ActualizacionIGVComponent implements OnInit {
  title = 'saldos-acumulados-frontend';
  constructor() {
  }
  
  ngOnInit(): void {

  }

  
   
}
