import { Apps, NewAction , Actions} from './../Model/AddAction.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class AddActionService {
  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
  constructor(private http: HttpClient) { }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    app: new FormControl(''),
    defSev: new FormControl(''),
    Comprat: new FormControl(''),
    percent: new FormControl(''),
    actionSev: new FormControl(''),
    actSelect: new FormControl('')
  });
private _posturl = 'https://loggitor-be.herokuapp.com/apps';
private _actions = 'https://loggitor-be.herokuapp.com/actionsName';
private serviceUrl = './assets/users.json';
getApp(): Observable<Apps[]> {
   return this.http.get<Apps[]>(this._posturl);
 }
 getAction(): Observable<Actions[]> {
  return this.http.get<Actions[]>(this._actions);
}
//  addAction (hero: Hero): Observable<NewAction[]> {
//   return this.http.post<NewAction[]>(this._posturl2, hero, httpOptions);
// }
addAction(newAc): Observable<NewAction> {
  return this.http.post<NewAction>(this.serviceUrl, newAc, this.httpOptions);
 }

}
