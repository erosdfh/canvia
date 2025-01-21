import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selector-cantidad-registros',
  templateUrl: './selector-cantidad-registros.component.html'
})
export class SelectorCantidadRegistrosComponent implements OnInit{
  cantParam: number = 0;
  public lstCantidadRegistros:any[] = [100,200,300];
  public cantidadRegistros = 100;
  @Output() changePerPage = new EventEmitter<number>();

  constructor() { 
  }
  ngOnInit(): void {
    this.cantParam=Number (localStorage.getItem("cantMaxReg"))|| 0;
    console.log("cantParam",this.cantParam)
    let repartido=0
    if(this.cantParam>0){
      repartido=this.cantParam/3;
      repartido=Number (repartido.toFixed(0));
    }
    localStorage.setItem("item",'100');
    //this.lstCantidadRegistros=[repartido,repartido+repartido,this.cantParam];
   // this.lstCantidadRegistros=[2,4,10];
    //this.cantidadRegistros=repartido;
    //this.cantidadRegistros=2;
  }
  public cambiarCantidadRegistros(): void {
    this.changePerPage.emit(this.cantidadRegistros);
  }
}