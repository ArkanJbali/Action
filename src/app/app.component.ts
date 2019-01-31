import { Component } from '@angular/core';
import {formatDate } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'action-loggitor';
  today = new Date();
  jstoday = '';
  constructor() {
    this.jstoday = formatDate(this.today, 'dd/MM/yyyy', 'en-US', '+0530');
  }
}
