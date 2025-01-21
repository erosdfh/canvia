import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantesUrls } from '../utils/constantes-urls';
import { Observable, map } from 'rxjs';
import { Parametria } from '../types/parametria';
@Injectable({
  providedIn: 'root',
})
export class RegistromanualeventoService {
  private headers = new HttpHeaders().append(
    'Content-Type',
    'application/json'
  );

  constructor(private http: HttpClient) {}

  public consultarParametria(
    codParametro: string,
    idComponente: string,
    codTipoRenta: string
  ): Observable<Parametria[]> {
    const uri = ConstantesUrls.CONSULTAR_PARAMETRIA.replace(
      '{codParametro}',
      codParametro
    )
      .replace('{idComponente}', idComponente)
      .replace('{codTipoRenta}', codTipoRenta)
      .replace('{indUsuario}', '1');
    return this.http.get<Parametria[]>(uri, { headers: this.headers });
  }
}
