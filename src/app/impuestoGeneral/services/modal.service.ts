import { Injectable } from '@angular/core';
import { NgbModal, NgbModalConfig, } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ModalInformativoComponent } from '../shared/components/modal-informativo/modal-informativo.component';
import { ModalDescargarComponent } from '../shared/components/modal-descargar/modal-descargar.component';
import { ModalColumnasComponent } from '../shared/components/modal-columnas/modal-columnas.component';
import { ModalExpiredComponent } from '../shared/components/modal-expired/modal-expired.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(config: NgbModalConfig, private md: NgbModal) {
    //config.backdrop = 'static';
    //config.keyboard = false;
    //config.centered = true
  }

  public showInformativo(titulo: string, mensaje: string, labelbtnRight?: string): Observable<boolean> {
    const modalRef = this.md.open(ModalInformativoComponent, {keyboard: false, backdrop: 'static'});
    modalRef.componentInstance.titulo = titulo;
    modalRef.componentInstance.mensaje = mensaje;
    modalRef.componentInstance.labelbtnRight = labelbtnRight ?? 'Aceptar';
    return modalRef.componentInstance.respuesta as Observable<boolean>;
  }

  public modalDescargar(titulo: string, mensaje: string, labelbtnRight?: string): Observable<boolean> {
    const modalRef = this.md.open(ModalDescargarComponent, {keyboard: false, backdrop: 'static'});
    modalRef.componentInstance.titulo = titulo;
    modalRef.componentInstance.mensaje = mensaje;
    modalRef.componentInstance.labelbtnRight = labelbtnRight ?? 'Aceptar';
    return modalRef.componentInstance.respuesta as Observable<boolean>;
  }
  public modalColumnas(columnas: any, mensaje: string, labelbtnRight?: string): Observable<boolean> {
    const modalRef = this.md.open(ModalColumnasComponent, {keyboard: false, backdrop: 'static'});
    modalRef.componentInstance.columnas = columnas;
    modalRef.componentInstance.mensaje = mensaje;
    modalRef.componentInstance.labelbtnRight = labelbtnRight ?? 'Aceptar';
    return modalRef.componentInstance.respuesta as Observable<boolean>;
  }
  public showSessionExpired(titulo: string, mensaje: string, labelbtnRight?: string) {
    const modalRef = this.md.open(ModalExpiredComponent);
    modalRef.componentInstance.titulo = titulo;
    modalRef.componentInstance.mensaje = mensaje;
    modalRef.componentInstance.labelbtnRight = labelbtnRight || 'Aceptar';
  }
  
  
}
