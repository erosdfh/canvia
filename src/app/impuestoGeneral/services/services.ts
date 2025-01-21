import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { UrisGenerales } from "./uris-generales";
import { catchError, map, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeneralesService {
  constructor(
    private http: HttpClient,
  ) { }

  obtenerDataN1(data: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: data,
    };
    const url = UrisGenerales.RESTNivel1
    return this.http.post<any>(url, data, { observe: 'response' });
  }

  obtenerDataN2(numRuc: any, numCta: any, perTribIni: any, perTribFin: any) {
    let json = {
      "numRuc": numRuc,
      "numCta": numCta,
      "perTribIni":perTribIni,
      "perTribFin":perTribFin,
      "indUsuarioConsulta": "1"
    }
    return this.http.post<any>(UrisGenerales.RESTNivel2 ,json, { observe: 'response' });
  }

  obtenerDataN3(numRuc: any, numCta: any, perTrib: any) {
    let json = {
      "numRuc": numRuc,
      "numCta": numCta,
      "perTrib":perTrib,
      "indUsuarioConsulta": "1"
    }
    return this.http.post<any>(UrisGenerales.RESTNivel3,json, { observe: 'response' });
  }

 /* descargarReporteN1(data: any, codigo: any) {
    return this.http.post(UrisGenerales.RESTDescargarNivel1, data, {
      responseType: 'blob',
      observe: 'response',
    }).pipe(
      map(respuesta => {
        return this.obtenerModeloExportar(data.type, respuesta);
      })
    );

  }*/
 

  obtenerRS(ruc: string) {
    return this.http.get<any>(UrisGenerales.RESTObtenerRS.replace("{numRuc}", ruc))
  }
 


  /*obtenerParametria(codParametro: String, idComponente: string, codTipoRen: string) {
    return this.http.get<any>(UrisGenerales.RestParametria + '?codParametro=' + codParametro + '&idComponente=' + idComponente +
      '&codTipoRenta=' + codTipoRen + '&indUsuario=1')
  }*/


  obtenerData() {
    return this.http.get<any>(UrisGenerales.REST01)
  }

  obtenerlistCA() {
    return this.http.get<any>(UrisGenerales.REST02)
  }

  obtenerDependencia() {
    return this.http.get<any>(UrisGenerales.REST05)
  }
}