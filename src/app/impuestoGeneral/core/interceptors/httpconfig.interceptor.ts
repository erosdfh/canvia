import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: any = sessionStorage.getItem('SUNAT.token');
    let solicitud = request;
    if (token) {
      solicitud = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        },
      });
    } else {
      console.log('token no existe')
      //this.utilService.modalMensaje('Error','Token no existen', Constantes.MODAL_DANGER);
      //this._spinner.hide();
    }
    return next.handle(solicitud).pipe(
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 422) {
            const mensaje = error.error.errors[0].msg;
            console.log('mensaje', mensaje)
            //this.utilService.modalMensaje('Mensaje',mensaje, Constantes.MODAL_PRIMARY);
          } else if (error.status === 401) {
            console.log('Ocurrió un error interno, vuelva a intentarlo en unos instantes')
            //this.utilService.modalMensaje('Error','Ocurrió un error interno, vuelva a intentarlo en unos instantes.', Constantes.MODAL_DANGER);
          } else {
            console.log('No esta autorizado, vuelva a iniciar sesión.')
            //this.utilService.modalMensaje('Error','No esta autorizado, vuelva a iniciar sesión.', Constantes.MODAL_DANGER);
          }
        }
        return throwError(error);
      })
    )
  }
}
