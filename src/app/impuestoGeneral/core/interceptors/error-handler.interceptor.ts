import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, delay, retryWhen } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalService } from '../../services/modal.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private modalService: ModalService, private spinner: NgxSpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 422) {
            if(error.error.errors != null)
            {
              const mensaje = error.error.errors[0].msg;
              if(error.error.errors[0].cod === 2223)
                //this.modalService.showSessionExpired('Mensaje Informativo', mensaje);
                return throwError(() => mensaje);
              else if(error.error.errors.length>0)
              return throwError(() => error.error.errors);
              else if(error.error.errors[0].cod !== 1013)
              this.modalService.showSessionExpired('Error', mensaje, 'Aceptar');
              this.spinner.hide();
            }
            else
            {
              return throwError(() => error);
            }
          } else if (error.status === 401) {
            this.modalService.showSessionExpired('Error', 'Su sesión ha expirado', 'Aceptar');
            this.spinner.hide();
            //return EMPTY;
          } else {
            this.modalService.showSessionExpired('Error', 'El servicio no se encuentra disponible. Intentelo en los siguientes minutos', 'Aceptar');
            this.spinner.hide();
            //return EMPTY;
          }
        }
        return throwError(() => new Error(error))
      })
    )
  }

}
