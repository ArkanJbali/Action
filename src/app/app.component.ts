import { HomePageComponent } from './home-page/home-page.component';
import { Component, ViewChild, Inject, Input } from '@angular/core';
import {formatDate, DOCUMENT } from '@angular/common';
import {MatSidenav} from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'action-loggitor';
  today = new Date();
  router = '';
  jstoday = '';
  keyid: string;
 eventID: string;
 idParam: string;
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(@Inject(DOCUMENT) document,
  private routess: ActivatedRoute,
  private home: HomePageComponent) {
    this.jstoday = formatDate(this.today, 'dd/MM/yyyy', 'en-US', '+0530');
    this.router = window.location.pathname;
    console.log(this.router, 'path URL');
    this.idParam = this.router.split('/')[2];
    console.log(this.idParam, 'ID Param from path URL');
    // this.keyid = this.routess.snapshot.params.id;
    // console.log(this.keyid, 'route');
    // this.routess.params.subscribe( params => console.log('params', params) );
    // console.log(this.home.getID());
  }
getIdParam() {
  return this.idParam;
}
  // refresh after entering to homepage for taking the id
  refreshHref() {
    window.location.reload();
  }
 openNav() {
    document.getElementById('mySidenav').style.width = '100px';
    document.getElementById('main').style.marginLeft = '100px';
    document.getElementById('main').style.opacity = '0.5';
    document.getElementById('main2').style.marginLeft = '100px';
    document.getElementById('main2').style.opacity = '0.5';
  }
   closeNav() {
    document.getElementById('mySidenav').style.width = 'auto';
    document.getElementById('main').style.marginLeft = 'auto';
    document.getElementById('main').style.opacity = '1';
    document.getElementById('main2').style.marginLeft = 'auto';
    document.getElementById('main2').style.opacity = '1';
  }
  close() {
    this.sidenav.close();
  }
  AdminURL() {
    window.open( 'https://admin-users.herokuapp.com/users');
  }
  LoggitorURL() {
    window.open('https://loggitor1.herokuapp.com/src/');
  }
  ActionURL() {
    window.open( 'https://loggitor-fe.herokuapp.com/home');
  }
}
