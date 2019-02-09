import { EventsService } from './../../Service/events.service';
import { HttpClient } from '@angular/common/http';
import { EventsInstance, NewAction } from './../../Model/EventsList.model';
import { AddActionComponent } from './../../add-action/add-action.component';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { AddActionService } from 'src/app/Service/add-action.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-actions',
  templateUrl: './add-actions.component.html',
  styleUrls: ['./add-actions.component.css']
})
export class AddActionsComponent implements OnInit {
  public application;
  public actions;
  public ev;
  public error;
  public success;
  app = new FormControl('');
  appsControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  constructor(public addService:  AddActionService,
    public dialogRef: MatDialogRef<AddActionComponent>,
    private http: HttpClient,
    public eventServ: EventsService
    ) { }
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
    console.log(data);
    this.actions = data;
  });
}
onClear() {
  this.addService.form.reset();
  this.addService.initializeFormGroup();
 // this.notificationServ.success(':: Submitted Successfully');
}
onSubmit(newEvent) {
  this.error = '';
  this.success = '';
  console.log('you submitted value:', newEvent, '\n', this.addService.form.value);
  if (this.addService.form.valid) {
    if (!this.addService.form.get('$id').value) {
    this.addService.addActions(this.addService.form.value)
      .subscribe(
        (res: NewAction) => {
          this.ev = res;
          this.success = ' Created Successfully ';
          console.log(this.ev + '\n' + this.success);
          this.onClose();
        },
        (val) => {
            console.log('POST call successful value returned in body',
                        val);
        });
        this.refresh();
      } else {
        this.addService.updateAction(this.addService.form.value);
        // console.log(this.ev + '\n' + this.success);
        console.log('Updatess', this.success);
          this.onClose();
          // this.refresh();
      }
      this.addService.form.reset();
    this.addService.initializeFormGroup();
      }
}
refresh(): void {
  window.location.reload();
}
onClose() {
  this.addService.form.reset();
    this.addService.initializeFormGroup();
    this.dialogRef.close();
}

}
