import { EventsInstance } from './../Model/HomePage.model';
import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import { ActionsByApp, ActionsBySeverity} from '../Model/HomePage.model';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  constructor(private http: HttpClient) { }
  //   private serviceUrl = './assets/users.json';
  //   getActionLog(): Observable< ActionLog[]> {
  //     return this.http.get<ActionLog[]>(this.serviceUrl);
  // }
  private _posturl = 'https://loggitor-be.herokuapp.com/getEventInsTable/1';
  private _ByAppURL = '';
  private _BySevURL = '';
   getPosts(): Observable<EventsInstance[]> {
     return this.http.get<EventsInstance[]>(this._posturl);
   }
   getApp(): Observable<ActionsByApp[]> {
    return this.http.get<ActionsByApp[]>(this._ByAppURL);
  }
  getSev(): Observable<ActionsBySeverity[]> {
    return this.http.get<ActionsBySeverity[]>(this._BySevURL);
  }
}
