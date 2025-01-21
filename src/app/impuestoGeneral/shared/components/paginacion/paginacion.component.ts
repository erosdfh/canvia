import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html'
})
export class PaginacionComponent {

  @Input() page = 1;
  @Input() perPage: number = 0;
  @Input() totalRegistros: number = 0;
  @Output() changePage = new EventEmitter<number>();

  constructor() { }

  public get pagePie() {
    if (this.page === 1) {
      return this.page;
    } else {
      return ((this.page - 1) * this.perPage) + 1;
    }
  }

  public inicio(): void {
    if (this.page === 1) return;
    this.changePage.emit(1);
  }

  public anterior(): void {
    if (this.page === 1) return;
    this.changePage.emit(this.page - 1);
  }

  public siguiente(): void {
    if (this.ultimoPage === this.page) return;
    this.changePage.emit(this.page + 1);
  }

  public final(): void {
    if (this.ultimoPage === this.page) return;
    this.changePage.emit(this.ultimoPage);
  }

  public get ultimoPage() {
    return Math.ceil(this.totalRegistros / this.perPage);
  }
}
