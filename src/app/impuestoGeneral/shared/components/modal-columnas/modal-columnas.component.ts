import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'guia-remision-modal-columnas',
  templateUrl: './modal-columnas.component.html',
  styleUrls: ['./modal-columnas.component.css']
})
export class ModalColumnasComponent implements OnInit {

  @Input() mensaje: string = '';
  @Input() labelBtnLeft: string = '';
  @Input() labelbtnRight: string = '';
  @Output() respuesta = new EventEmitter<any>();
  lista:any[]=[];
  listachek:any[]=[];
  form: FormGroup = this.formBuilder.group({
    columnas:new FormArray([]),
  });
  constructor(public activeModal: NgbActiveModal,private formBuilder: FormBuilder) { }
  @Input() columnas: any[]=[];
  ngOnInit(): void {
  
   }

  public aceptar(): void {
    this.activeModal.dismiss('Cross click');
    this.respuesta.emit(this.columnas);
  }

  columnasSelect(event:any){
    const bol = event.target.checked ? true:false
      const dats ={
        state:bol,value:event.target.value
      }
      console.log("event.target.value",event.target.value)
        const index=this.columnas.findIndex(n=>n.value==event.target.value);
        this.columnas[index]=dats;  
  }
}
