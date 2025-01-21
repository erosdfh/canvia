import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'ModSaldoIGV-root',
  templateUrl: './ModSaldoIGV.component.html',
  styleUrls: ['./ModSaldoIGV.component.scss'],
})
export class ModSaldoIGVComponent implements OnInit {
  title = 'saldos-acumulados-frontend';
  getForm: FormGroup;
    constructor(private fb: FormBuilder,private router: Router,) {
      this.getForm = this.fb.group({
        ruc: ['', [Validators.required]],
        motivo: ['', [Validators.required]],
      });
    }
  
  ngOnInit(): void {

  }

  
   
}
