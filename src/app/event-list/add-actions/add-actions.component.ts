import { AddActionComponent } from './../../add-action/add-action.component';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { AddActionService } from 'src/app/Service/add-action.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-actions',
  templateUrl: './add-actions.component.html',
  styleUrls: ['./add-actions.component.css'],
  styles: ['class="bg-dark text-white"']
})
export class AddActionsComponent implements OnInit {
  public application;
  public actions;
  app = new FormControl('');
  appsControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  constructor(public addService:  AddActionService,
    public dialogRef: MatDialogRef<AddActionComponent>) { }
  ngOnInit() {
   this.addService.getApp().subscribe(data => {
    if (!data) {
      return;
    }
    this.application = data;

  });
  this.addService.getAction().subscribe(data => {
    if (!data) {
      return;
    }
    this.actions = data;
  });
}
onClear() {
  this.addService.form.reset();
  this.addService.initializeFormGroup();
 // this.notificationServ.success(':: Submitted Successfully');
}
onSumbit() {
  if (this.addService.form.valid) {
   // this.addService.insertAction(this.addService.form.value);
    this.addService.form.reset();
    this.addService.initializeFormGroup();
    // this.notificationServ.success(':: Submitted Successfully');
    this.onClose();
  }
}
onClose() {
  this.addService.form.reset();
    this.addService.initializeFormGroup();
    this.dialogRef.close();
}
}
