import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { STORAGE_CURRENT_DATA, STORAGE_RUC, STORAGE_TOKEN, STORAGE_USER_DATA } from '../utils/constantes';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  public tieneToken = false;

  constructor(private sessionService: SessionService) {}

  generateToken(token: string): boolean {
    this.sessionService.setVariable(STORAGE_TOKEN, token);
    this.tieneToken = true;
    let currentData = this.decodeToken(token);
    this.sessionService.setVariable(STORAGE_CURRENT_DATA, JSON.stringify(currentData));
    this.sessionService.setVariable(STORAGE_USER_DATA, currentData.userdata);
    this.sessionService.setVariable(STORAGE_RUC, currentData.sub);
    return this.tieneToken;
  }

  private decodeToken(token: string): any {
    token = token || '';
    if (token === null || token === '') {
      return { upn: '' };
    }
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('JWT debe tener 3 partes');
    }
    const decoded = this.urlBase64Decode(parts[1]);
    if (!decoded) {
      throw new Error('No se puede decodificar el token');
    }
    return JSON.parse(decoded);
  }

  private urlBase64Decode(str: string) {
    var output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
        case 0:
            break;
        case 2:
            output += '==';
            break;
        case 3:
            output += '=';
            break;
        default:
            throw 'Illegal base64url string!';
    }
    return decodeURIComponent(window.escape(window.atob(output)));
  }
}
