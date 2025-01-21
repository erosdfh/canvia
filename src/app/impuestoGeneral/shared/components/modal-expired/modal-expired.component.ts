import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-expired',
  templateUrl: './modal-expired.component.html',
  styleUrls: ['./modal-expired.component.css']
})
export class ModalExpiredComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() mensaje: string= '';
  @Input() labelbtnRight: string= '';
  @Output() respuesta = new EventEmitter<boolean>();

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {

  }

  public aceptar(): void {
    this.respuesta.emit(true);
    this.activeModal.dismiss('Cross click');
  }

}
