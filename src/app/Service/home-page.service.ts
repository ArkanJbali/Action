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
  private _posturl = 'https://loggitor-be-test.herokuapp.com/getEventInsTable/2019-02-12';
  private _getAllEventsCounter = 'https://loggitor-be-test.herokuapp.com/countEventIns';
  private _ByAppURL = 'https://loggitor-be-test.herokuapp.com/actionsbyapp/2019-02-12/0/0';
  private _ByAppURLnew = 'https://loggitor-be-test.herokuapp.com/actionsbyapp/2019-02-12/';
  private _BySevURL = 'https://loggitor-be-test.herokuapp.com/actionsbyseverity/2019-02-12/0/0';
  private _SevChart = 'https://loggitor-be-test.herokuapp.com/getDailyChart/2019-02-12/0/0';
  getEventInsCounter(): Observable<ActionsByApp[]> {
    return this.http.get<ActionsByApp[]>(this._getAllEventsCounter);
  }
  getPostsL(_pageSize: number, _pageNumber: number): Observable<EventsInstance[]> {
    return this.http.get<EventsInstance[]>(this._posturl + '/' + _pageSize + '/' + _pageNumber);
  }
  getAppL(_pageSize: number, _pageNumber: number): Observable<ActionsByApp[]> {
   return this.http.get<ActionsByApp[]>(this._ByAppURLnew + _pageSize + '/' + _pageNumber);
  }
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
