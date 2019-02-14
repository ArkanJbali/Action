import { EventsInstance, SevChart } from './../Model/HomePage.model';
import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import { ActionsByApp, ActionsBySeverity} from '../Model/HomePage.model';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  constructor(private http: HttpClient) { }
  private _posturl = 'https://loggitor-be-test.herokuapp.com/getAllEventInsTable/2019-02-12';
  private _ByAppURL = 'https://loggitor-be-test.herokuapp.com/actionsbyapp/2019-02-12/0/0';
  private _BySevURL = 'https://loggitor-be-test.herokuapp.com/actionsbyseverity/2019-02-12/0/0';
  private _SevChart = 'http://loggitor-be-test.herokuapp.com/getDailyChart/2019-02-12/0/0';
   getPosts(): Observable<EventsInstance[]> {
     return this.http.get<EventsInstance[]>(this._posturl);
   }
   getApp(): Observable<ActionsByApp[]> {
    return this.http.get<ActionsByApp[]>(this._ByAppURL);
  }
  getSev(): Observable<ActionsBySeverity[]> {
    return this.http.get<ActionsBySeverity[]>(this._BySevURL);
  }
  getSevChart(): Observable<SevChart[]> {
    return this.http.get<SevChart[]>(this._SevChart);
  }
}
