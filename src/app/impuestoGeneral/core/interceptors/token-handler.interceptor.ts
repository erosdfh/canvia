import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class TokenHandlerInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//COMENTAR PARA HACER EL DESPLIEGE

 /*if (!environment.production) {
      const tokenString = 'eyJraWQiOiJhcGkuc3VuYXQuZ29iLnBlLmtpZDIwMSIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIiLCJhdWQiOiJbe1wiYXBpXCI6XCJodHRwczpcL1wvYXBpLWludHJhbmV0LnN1bmF0LnBlcnVcIixcInJlY3Vyc29cIjpbe1wiaWRcIjpcIlwvbG9hZGVyXC9yZWNhdWRhY2lvblwvdHJpYnV0YXJpYVwvZ2VzdGlvbnNhbGRvc1wiLFwiaW5kaWNhZG9yXCI6XCIxXCIsXCJndFwiOlwiMTAwMTAwXCJ9XX1dIiwidXNlcmRhdGEiOnsibnVtUlVDIjoiIiwidGlja2V0IjoiMjE0NDExMjQxMTI2NiIsIm5yb1JlZ2lzdHJvIjoiUUg1NSIsImFwZU1hdGVybm8iOiJTQVJNSUVOVE8iLCJsb2dpbiI6Ik1QRUxBRVoiLCJub21icmVDb21wbGV0byI6IlBlbGFleiBTYXJtaWVudG8gTW9pc2VzIiwibm9tYnJlcyI6Ik1PSVNFUyIsImNvZERlcGVuZCI6IjAwNzEiLCJjb2RUT3BlQ29tZXIiOiIiLCJjb2RDYXRlIjoiUDciLCJuaXZlbFVPIjoyLCJjb2RVTyI6IjdSMDAwMCIsImNvcnJlbyI6InBydWViYXNAc3VuYXQuZ29iLnBlIiwidXN1YXJpb1NPTCI6IiIsImlkIjoiIiwiZGVzVU8iOiJJTlRFTkRFTkNJQSBERSBUUklCVVRPUyBJTlRFUk5PUyBMQU1CQVlFUVVFIiwiZGVzQ2F0ZSI6IklOVEVOREVOVEUiLCJhcGVQYXRlcm5vIjoiUEVMQUVaIiwiaWRDZWx1bGFyIjpudWxsLCJtYXAiOnsiY29kVU9WaXMiOiI3UjAlIiwiaW5kQWR1YW5hIjpudWxsLCJjb2RBbnRlIjpudWxsLCJuaXZlbF9mdW5jIjpudWxsLCJyb2xlcyI6bnVsbCwiaWRNZW51IjoiMjE0NDExMjQxMTI2NiIsInRpcE9yaWdlbiI6IklBIiwidGlwUGVycyI6bnVsbH19LCJuYmYiOjE3MTY0ODE0NjYsImNsaWVudElkIjoiZDI5OWZkMTYtOGM0My00ZjhiLWJiYTEtMWQ5ODM3MGZhODg0IiwiaXNzIjoiaHR0cHM6XC9cL2FwaS1zZWd1cmlkYWQuc3VuYXQuZ29iLnBlXC92MVwvY2xpZW50ZXNzdW5hdFwvZDI5OWZkMTYtOGM0My00ZjhiLWJiYTEtMWQ5ODM3MGZhODg0XC9vYXV0aDJcL3Rva2VuXC8iLCJwcm9maWxlcyI6WyJbXSJdLCJleHAiOjE3MTY0ODUwOTYsImdyYW50VHlwZSI6ImF1dGhvcml6YXRpb25fdG9rZW4iLCJpYXQiOjE3MTY0ODE0OTZ9.N9lPZWGpJNmkVESFaH1EL3csCFNyRW_MXCraEYmvfcVaJ5GjFmVNm3AMUJuUA0QCXPeQQn9x0oRo66fLO8tgQcXgyzkgFiuJRreBKHFl7yvrSiM5TLLszb8AdbW9KfUu0yz2XtF9CrCjAD_QxMgI1MUf667LPTU7eSE1HUa_1CIUQFYbHpe8CXjvTAa3cOgpyfKaDdhEtwQAJi27hho0M7_dRBjhhBEqozfaYM8GFRIAiSoFtA1A9L-8e15By7AzLdhY8aYHyFJEr9UwOEf796sF9h4ftbEOvk7tnkbqjvIW1zwOeru5fB5SJDRZCCUHwCEaI5F07jTWU3f7Yrtzqg';

      sessionStorage.setItem('SUNAT.token', tokenString);
    }*/

    const token = sessionStorage.getItem('SUNAT.token');
    if (token) {
      request = request.clone({
        //params: new HttpParams().append('no-cache', new Date().getTime().toString()) ,
        setHeaders: {
          authorization: `Bearer ${token}`,
         // 'numConsulta': 'codUsuario',
        },
      });
    }
    return next.handle(request);
  }
}
