import { AlertsComponent } from './../alerts/alerts.component';
import { MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private dialog: MatDialog) {
  }
  openConfirmDialog(msg) {
    return this.dialog.open(AlertsComponent, {
      width: '400px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: '10px' },
      data : {
        message : msg
      }
    });
  }
}
