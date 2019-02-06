import { HttpClient } from '@angular/common/http';
import { EventsInstance } from './../../Model/EventsList.model';
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
  public ev;
  public error;
  public success;
  // tslint:disable-next-line:max-line-length
  public s: [  ] = [];
  app = new FormControl('');
  appsControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);

  constructor(public addService:  AddActionService,
    public dialogRef: MatDialogRef<AddActionComponent>,
    private http: HttpClient
    ) { }

  ngOnInit() {
    const req = this.http.post('https://actiondb.herokuapp.com/addEvent', {
      appName: 'AAA',
      appType: 'core',
      defSeverity: 'd Critical',
      comperator: 'bigger',
      percent: 50.0,
      eventName: 'WTF1',
      eventSeverity: 'critical',
      actionName: 'SMS',
      description: 'idk1'
    }).subscribe(res => {console.log(res); }, err => { console.log('Error occured new Add'); } );
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
onSumbit(newEvent) {
  this.error = '';
  this.success = '';
  console.log('you submitted value:', newEvent);
 // if (this.addService.form.valid) {
    this.addService.store(newEvent)
      .subscribe((res: EventsInstance[]) => {
        this.ev = res;
        this.success = ' Created Successfully ';
        // this.addService.form.reset();
        // this.addService.initializeFormGroup();
       // newEvent.reset();
        this.onClose();
      },
      (err) => this.error = err);
    // this.notificationServ.success(':: Submitted Successfully');

  // }
}
onClose() {
  this.addService.form.reset();
    this.addService.initializeFormGroup();
    this.dialogRef.close();
}

// add2() {
//   this.addService.addAct(this.s)
//     .subscribe(hero => this.ev.push(hero));
// }
// add(action): void {
//   if (!action) { return; }
//   this.addService.addAct(action)
//     .subscribe(hero => {
//       this.ev.push(hero);
//     });
// }
onSubmit2(form: any): void {
  console.log('you submitted value:', form);
}
}
