
import { StorageConstante } from '../constantes/storage/storage.constante';
import { UserDataType } from '../user-session/user-data.type';
export class SessionStorageUtil {

  static getUserData(): UserDataType {
    return JSON.parse(sessionStorage.getItem(StorageConstante.STORE_USERDATA) || "");
  }

  static getNumRuc(): string {
    let user = (this.getUserData() || { numRUC: "" }) as UserDataType;
    return user.numRUC;
  }

  static getToken(): string {
    return sessionStorage.getItem(StorageConstante.STORE_TOKEN) || ""
  }

  static setToken(token: string) {
    sessionStorage.setItem(StorageConstante.STORE_TOKEN, token);
  }

  static setItem(key: string, data: any): void {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  static setItemString(key: string, data: any): void {
    sessionStorage.setItem(key, data);
  }

  static getItem<T>(key: string): T {
    return JSON.parse(sessionStorage.getItem(key)|| "");
  }

  static getNumTicket(): string {
    return sessionStorage.getItem(StorageConstante.STORE_NUMTICKET_COMPARACION) || "";
  }

  static setNumTicket(ticketValue: any): void {
    sessionStorage.setItem(StorageConstante.STORE_NUMTICKET_COMPARACION, ticketValue);
  }

  static getPerPeriodoTributario(): string {
    return sessionStorage.getItem(StorageConstante.STORE_PERPERIODOTRIBUTARIO_COMPARACION) || "";
  }

  static setPerPeriodoTributario(perPeriodoTributarioValue: any): void {
    sessionStorage.setItem(StorageConstante.STORE_PERPERIODOTRIBUTARIO_COMPARACION, perPeriodoTributarioValue);
  }
}
