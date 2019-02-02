import { Component, OnInit, ViewChild } from '@angular/core';
import { AddActionService } from '../Service/add-action.service';


@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.css']
})
export class AddActionComponent implements OnInit {
  public apps;
  public actions;
  constructor(public addactionService:  AddActionService) { }
  ngOnInit() {
   this.addactionService.getApp().subscribe(data => {
    if (!data) {
      return;
    }
    this.apps = data;

  });
  this.addactionService.getAction().subscribe(data => {
    if (!data) {
      return;
    }
    this.actions = data;
  });
}
}
