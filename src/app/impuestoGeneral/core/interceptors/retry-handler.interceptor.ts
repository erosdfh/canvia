import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { EMPTY, Observable, of, throwError, concat } from 'rxjs';
import { catchError, delay, map, retryWhen, scan, switchMap, take, takeWhile, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalService } from '../../services/modal.service';

@Injectable({
  providedIn: 'root'
})
export class RetryHandlerInterceptor implements HttpInterceptor {

  constructor(private modalService: ModalService, private spinner: NgxSpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      retryWhen(errors => errors.pipe(
        switchMap((error) => {
          console.log("error",error);
          if (error.status === 502 || error.status === 504 || error.status === 503) {
            return of({status: error.status, errors: error.errors});
          }
          return throwError(() => error);
         /* return throwError(() => {
            console.log('switchMap',error);
            return new Error(error);
          });*/
        }),
        scan(acc => acc + 1, 0),
        takeWhile(acc => acc < 3),
        delay(1000),
        o => concat(o,throwError(JSON.stringify({cod:422, errors: [{cod:2343, msg: 'El servicio no se encuentra disponible. Intentelo en los siguientes minutos'}]})))
      )),
    )
  }

}
