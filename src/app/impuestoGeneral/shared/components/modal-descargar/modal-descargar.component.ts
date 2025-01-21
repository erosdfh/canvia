import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'guia-remision-modal-descarga',
  templateUrl: './modal-descargar.component.html',
  styleUrls: ['./modal-descargar.component.css']
})
export class ModalDescargarComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() mensaje: string= '';
  @Input() labelBtnLeft: string= '';
  @Input() labelbtnRight: string= '';
  tipo:any;
  formModal!: FormGroup;
  @Output() respuesta = new EventEmitter<boolean>();
  lista:any[]=[{value:"EXCEL"},{value:"PDF"}];
  constructor(public activeModal: NgbActiveModal) {}
  
  ngOnInit(): void {
    this.formModal = new FormGroup({
      seleccion: new FormControl('', Validators.required)
    });
  }

  public aceptar(): void {
    this.formModal.markAllAsTouched();
    if (this.formModal.invalid) {
      return;
    }
    let ti:any="";
    console.log("this.tipo",this.tipo);
    if(this.tipo=="PDF"){
      ti="02"
    }else{
      ti="01"
    }
      this.activeModal.dismiss('Cross click');
      this.respuesta.emit(ti);
  }

}
