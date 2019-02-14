import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(public snackBar: MatSnackBar) { }
  config: MatSnackBarConfig = {
    duration: 4000,
    horizontalPosition: 'left',
    verticalPosition: 'top'
  };


  success(msg) {
    this.config['panelClass'] = ['notification', 'success'];
    this.snackBar.open(msg, '', this.config);
  }

  warn(msg) {
    this.config['panelClass'] = ['notification', 'warn'];
    this.snackBar.open(msg, '', this.config);
  }
}
