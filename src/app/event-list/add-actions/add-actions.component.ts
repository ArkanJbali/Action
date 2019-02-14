import { NotificationsService } from './../../Service/notifications.service';
import { EventsService } from './../../Service/events.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventsInstance, NewAction } from './../../Model/EventsList.model';
import { AddActionComponent } from './../../add-action/add-action.component';
import { MatDialogRef, MatStepper } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { AddActionService } from 'src/app/Service/add-action.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
  selector: 'app-add-actions',
  templateUrl: './add-actions.component.html',
  styleUrls: ['./add-actions.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})

export class AddActionsComponent implements OnInit {
  public application;
  public actions;
  public emails;
  public ev;
  public error;
  public success;
  formGroup: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  app = new FormControl('');
  appsControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  constructor(public addService:  AddActionService,
    public dialogRef: MatDialogRef<AddActionComponent>,
    private http: HttpClient,
    public eventServ: EventsService,
    private NotifServ: NotificationsService,
    private _formBuilder: FormBuilder
    ) { }
  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this.firstFormGroup = this.addService.form,
        this.secondFormGroup = this.addService.form2 ,
      ])
    });
    this.firstFormGroup = this.addService.form ;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
      this.secondFormGroup = this.addService.form ;
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
this.addService.getEmail().subscribe(data => {
if (!data) {
  return;
}
this.emails = data;
});
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
  this.NotifServ.warn(': : Cleared');
}
onSubmit(newEvent) {
  this.error = '';
  this.success = '';
  console.log('you submitted value:', newEvent, '\n', this.addService.form.value);
  // console.log('you submitted value:', newUser, '\n', this.addService.form2.value);
  if (this.addService.form.valid) {
    if (!this.addService.form.get('id').value) {
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
        // this.refresh();
      } else {
        this.addService.updateAction(this.addService.form.value).subscribe((val) => {
          console.log('Put call successful value returned in body',
                      val); });
        // console.log(this.ev + '\n' + this.success);
        console.log('Updatess', this.success);
          this.onClose();
         // this.refresh();
      }
      this.NotifServ.success(': : Submitted successfully');
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
goBack(stepper: MatStepper) {
  stepper.previous();
}

goForward(stepper: MatStepper) {
  stepper.next();
}
}
