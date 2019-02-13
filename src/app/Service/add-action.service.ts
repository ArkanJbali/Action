import { EventsInstance, NewAction } from './../Model/EventsList.model';
import { Apps , Actions} from './../Model/AddAction.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class AddActionService {
  [x: string]: any;
 httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
  constructor(private http: HttpClient) { }
 form: FormGroup = new FormGroup({
    id: new FormControl(null),
    eventName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    appName: new FormControl('', Validators.required),
    defSeverity: new FormControl(''),
    comperator: new FormControl(''),
    percent: new FormControl(''),
    eventSeverity: new FormControl(''),
    actionName: new FormControl(''),
    description: new FormControl(''),
    userName: new FormControl(''),
    msg: new FormControl('')
  });
private _posturl = 'https://loggitor-be-test.herokuapp.com/apps';
private _actions = 'https://loggitor-be-test.herokuapp.com/actionsName';
private serviceUrl = './assets/users.json';
private _posturl2 = 'https://loggitor-be-test.herokuapp.com/addEvent';
private _UpdateURL = 'https://loggitor-be-test.herokuapp.com/updateEvent';
getApp(): Observable<Apps[]> {
   return this.http.get<Apps[]>(this._posturl);
 }
 getAction(): Observable<Actions[]> {
  return this.http.get<Actions[]>(this._actions);
}

store(events: EventsInstance) {
  return this.http.post(this._posturl2, events, this.httpOptions);
}
updateAction (action): Observable<NewAction> {
    // const url = `${this._UpdateURL}/${action.$id}`;
    console.log('checked id', action.$id, '\n');
    // alert(action.$id);
  return this.http.put<NewAction>(this._UpdateURL, action, this.httpOptions)
  .pipe(
    tap((s: NewAction) => console.log(action)),
    catchError(this.handleError<NewAction>('updateAction'))
  );
}
addActions(action): Observable<NewAction> {
  return this.http.post<NewAction>(this._posturl2, action, this.httpOptions)
  .pipe(
    tap((s: NewAction) => console.log(action)),
    catchError(this.handleError<NewAction>('addActions'))
  );
}
//  addAct (newAc): Observable<EventsInstance> {
//   return this.http.post<EventsInstance>(this.serviceUrl, newAc, this.httpOptions)
//     .pipe(
//       catchError(this.handleError('addAct', newAc))
//     );
// }
 initializeFormGroup() {
   this.form.setValue({
    id: 0,
    eventName: '',
    appName: '',
    defSeverity: '',
    comperator: '',
    percent: '',
    eventSeverity: '',
    actionName: '',
    description: '',
    userName: '',
    msg: ''
   });
 }
 populateForm(action) {
  console.log(action.id);
   this.form.setValue({
    id: action.id,
    eventName: action.eventName,
    appName: action.appName,
    defSeverity: action.defSeverity,
    comperator: action.comperator,
    percent: action.percent,
    eventSeverity: action.eventSeverity,
    actionName: action.actionName,
    description: action.description,
    userName: action.userName,
    msg: action.msg
   });
 }
 deleteAction($key: string) {
 // this.action.remove($key);
}

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
