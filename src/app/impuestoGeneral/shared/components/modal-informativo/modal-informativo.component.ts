import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'guia-remision-modal-informativo',
  templateUrl: './modal-informativo.component.html',
  styleUrls: ['./modal-informativo.component.css']
})
export class ModalInformativoComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() mensaje: string= '';
  @Input() labelBtnLeft: string= '';
  @Input() labelbtnRight: string= '';
  @Output() respuesta = new EventEmitter<boolean>();

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  public aceptar(): void {
      this.activeModal.dismiss('Cross click');
      this.respuesta.emit(true);
  }

}
