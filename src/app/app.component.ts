import { Component, OnInit } from '@angular/core';
import { StorageConstante } from 'src/libs/constantes/storage/storage.constante';
import { SessionStorageUtil } from 'src/libs/session-storage/session-storage.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'saldos-acumulados-intranet-frontend';
  constructor() {}
  ngOnInit(): void {
    this.saveUserDataBasedOnToken();
}

saveUserDataBasedOnToken() {
    const token = SessionStorageUtil.getToken();
    const userData = JSON.parse(atob(token.split('.')[1])).userdata;
    SessionStorageUtil.setItem(StorageConstante.STORE_USERDATA, userData);
}
}
