import { EventsInstance } from './../Model/EventsList.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private _posturl = 'https://loggitor-be.herokuapp.com/events';
  private _posturl2 = 'https://loggitor-be.herokuapp.com/viewEvents/1/100';

  constructor(private http: HttpClient) {
   }
   getPosts(): Observable<EventsInstance[]> {
     return this.http.get<EventsInstance[]>(this._posturl2);
   }
}
