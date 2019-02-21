import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private router: Router,
    private appComponent: AppComponent) { }

  ngOnInit() {
    setTimeout(() => {
      // this.router.navigate(['home/', this.appComponent.getIdParam()]);
      // this.router.navigate(['https://admin-users.herokuapp.com']);
      window.open('https://admin-users.herokuapp.com', '_self');

  }, 5000);
  }

}
