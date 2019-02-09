import { Component, ViewChild, Inject } from '@angular/core';
import {formatDate, DOCUMENT } from '@angular/common';
import {MatSidenav} from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'action-loggitor';
  today = new Date();
  jstoday = '';
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(@Inject(DOCUMENT) document) {
    this.jstoday = formatDate(this.today, 'dd/MM/yyyy', 'en-US', '+0530');
  }
 openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginRight = '250px';
    document.getElementById('main').style.opacity = '0.5';
  }
   closeNav() {
    document.getElementById('mySidenav').style.width = 'auto';
    document.getElementById('main').style.marginRight = 'auto';
    document.getElementById('main').style.opacity = '1';
  }
  close() {
    this.sidenav.close();
  }
}
