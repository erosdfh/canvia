import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class SessionService {

  setVariable(variable: string, value: any): void {
    sessionStorage.setItem(variable, value);
  }

  getVariableString(variable: string): string {
    return sessionStorage.getItem(variable) ?? '';
  }

  getVariableObject<T>(variable: string): T | null {
    const item = sessionStorage.getItem(variable);
    if(item) {
      return JSON.parse(item);
    }
    return null;
  }
}
