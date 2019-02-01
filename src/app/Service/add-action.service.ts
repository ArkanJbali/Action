import { Apps } from './../Model/AddAction.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddActionService {

  constructor(private http: HttpClient) { }

private _posturl = 'https://loggitor-be.herokuapp.com/apps';

getApp(): Observable<Apps[]> {
   return this.http.get<Apps[]>(this._posturl);
 }
}
