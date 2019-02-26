import { ActivatedRoute } from '@angular/router';
import { Idclass } from './../Model/IDClass.model';
import { EventsInstance, SevChart, WeekBySeverity } from './../Model/HomePage.model';
import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import { ActionsByApp, ActionsBySeverity} from '../Model/HomePage.model';
import {Observable} from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  today = new Date();
  jstoday = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.jstoday = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
  }
  private _posturl = 'https://loggitor-be.herokuapp.com/getEventInsTable/' + new Idclass(this.route).getDate();
  private _getAllEventsCounter = 'https://loggitor-be.herokuapp.com/countEventIns/' +   new Idclass(this.route).getDate();
  private _ByAppURL = 'https://loggitor-be.herokuapp.com/actionsbyapp/'  + new Idclass(this.route).getDate() + '/0/0';
  private _ByAppURLnew = 'https://loggitor-be.herokuapp.com/actionsbyapp/' + new Idclass(this.route).getDate() + '/0';
  private _BySevURL = 'https://loggitor-be.herokuapp.com/actionsbyseverity/'  + new Idclass(this.route).getDate() + '/0/0';
  private _SevChart = 'https://loggitor-be.herokuapp.com/getDailyChart/'  + new Idclass(this.route).getDate() + '/0/0';
  private _WeekSevURL = 'https://loggitor-be.herokuapp.com/WeeklyDiagram';


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
  getWeeklySev(): Observable<WeekBySeverity[]> {
    return this.http.get<WeekBySeverity[]>(this._WeekSevURL);
  }
}
