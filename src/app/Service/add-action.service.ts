import { EventsInstance } from './../Model/EventsList.model';
import { Apps, NewAction , Actions} from './../Model/AddAction.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class AddActionService {
 httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
  constructor(private http: HttpClient) { }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    app: new FormControl('', Validators.required),
    defSev: new FormControl(''),
    Comprat: new FormControl(''),
    percent: new FormControl(''),
    desc: new FormControl(''),
    actionSev: new FormControl(''),
    actSelect: new FormControl('')
  });
private _posturl = 'https://loggitor-be.herokuapp.com/apps';
private _actions = 'https://loggitor-be.herokuapp.com/actionsName';
private serviceUrl = './assets/users.json';
private _posturl2 = 'https://actiondb.herokuapp.com/addEvent';

public s = [ {id: 9, title: 'ss', appName: 'BLM', defSeverity: 'Critical', comperator: 'bigger',
  percent: 50, eventSeverity: 'Critical', actionName: 'SMS', description: 'idk1'} ];
getApp(): Observable<Apps[]> {
   return this.http.get<Apps[]>(this._posturl);
 }
 getAction(): Observable<Actions[]> {
  return this.http.get<Actions[]>(this._actions);
}
store(events: EventsInstance) {
  return this.http.post(this._posturl2, events, this.httpOptions);
}

// addActions(action): Observable<EventsInstance> {
//   return this.http.post<EventsInstance>(this.serviceUrl, action, this.httpOptions).pipe(
//     tap((s: EventsInstance) => console.log(`added action w/ id=${action.id}`)),
//     catchError(this.handleError<EventsInstance>('addActions'))
//   );
// }
//  addAct (newAc): Observable<EventsInstance> {
//   return this.http.post<EventsInstance>(this.serviceUrl, newAc, this.httpOptions)
//     .pipe(
//       catchError(this.handleError('addAct', newAc))
//     );
// }
 initializeFormGroup() {
   this.form.setValue({
    $key: null,
    title: '',
    app: '',
    defSev: '',
    Comprat: '',
    percent: '',
    desc: '',
    actionSev: '',
    actSelect: ''
   });
 }
 populateForm(action) {
  console.log(action.id);
   this.form.setValue({
     $key: action.id,
    title: action.solution,
    app: action.appName,
    defSev: action.defSeverity,
    Comprat: action.comperator,
    percent: action.percent,
    desc: action.description,
    actionSev: action.eventSeverity,
    actSelect: action.actionName
   });
 }
 deleteAction($key: string) {
 // this.action.remove($key);
}

// private handleError<T> (operation = 'operation', result?: T) {
//   return (error: any): Observable<T> => {

//     // TODO: send the error to remote logging infrastructure
//     console.error(error); // log to console instead

//     // Let the app keep running by returning an empty result.
//     return of(result as T);
//   };
// }
}
