import { EventsInstance, NewAction } from './../Model/EventsList.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
const httpOptions: { headers: HttpHeaders } = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  [x: string]: any;
  today = new Date();
  jstoday = '';
  private _posturl = 'https://loggitor-action-be.herokuapp.com/viewEvents';
  private _posturl2 = 'https://loggitor-action-be.herokuapp.com/viewEvents';
  private _page = 1;
  private _items = 10;
  private _posturlnew  = this._posturl2 + '/' + this._page + '/' +  this._items ;
  private _posturl22 = 'https://loggitor-action-be.herokuapp.com/viewEvents/1/100';
  private _DeleteURL = 'https://loggitor-action-be.herokuapp.com/deleteEvent';
  private checkkkk = 'https://loggitor-action-be.herokuapp.com/viewEvents/1/100';
  private _UpdateURL = 'https://loggitor-action-be.herokuapp.com/updateEvent';
  private _getAllEventsCounter = 'https://loggitor-action-be.herokuapp.com/countDefinedEvent';
  // private _ByAppURL = 'https://loggitor-be.herokuapp.com/actionsbyapp/'  + new Idclass(this.route).getDate() + '/0/0';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.jstoday = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
   }
   getEventsCounter(): Observable<NewAction[]> {
    return this.http.get<NewAction[]>(this._getAllEventsCounter);
   }
  getPosts(_page: number , _items: number): Observable<NewAction[]> {
     return this.http.get<NewAction[]>(this._posturl + '/' + _page + '/' + _items);
  }
/*    getItems(page: number) {
     return this.http.get.get<EventsInstance[]>(this._posturlnew + '/' + page);
   } */


   getPosts2(): Observable<NewAction[]> {
     return this.http.get<NewAction[]>(this.checkkkk);
   }


     /** DELETE: delete the action from the server */
  deleteAction (action: NewAction | number): Observable<NewAction> {
    const id = typeof action === 'number' ? action : action.id;

//     const url = `${this._posturlnew}/${id}`;

//     return this.http.delete<EventsInstance>(url, httpOptions).pipe(
//       tap(_ => this.log(`deleted action id=${id}`)),
//       catchError(this.handleError<EventsInstance>('deleteAction'))
//     );

    const url = `${this._DeleteURL}/${id}`;
    console.log('done' + action + url);
    return this.http.delete<NewAction>(url, httpOptions);
    // .pipe(
    //   tap(_ => this.log(`deleted action id=${id}`)),
    //   catchError(this.handleError<EventsInstance>('deleteAction'))
    // );

  }
getAll() {
  return this.http.get<NewAction[]>(this._UpdateURL);
}

  // /** PUT: update the action on the server */
  // updateAction (action: NewAction): Observable<NewAction> {
  //   const url = `${this._UpdateURL}/${action.id}`;
  //   return this.http.put(url, action, httpOptions)
  //   .pipe(
  //     tap(_ => this.log(`updated action id=${action.id}`)),
  //     catchError(this.handleError<any>('updateAction'))
  //   );
  //  // return this.http.put<NewAction>(this._UpdateURL, action, this.httpOptions);
  // }

  /** PUT: update the action on the server */

//  updateAction (action: EventsInstance): Observable<any> {
//     const url = `${this._posturlnew}/${action.id}`;
//     return this.http.put(url, action, httpOptions).pipe(

  updateAction (action: NewAction): Observable<NewAction> {
    const url = `${this._UpdateURL}/${action.id}`;
    return this.http.put(url, action, httpOptions)
    .pipe(

      tap(_ => this.log(`updated action id=${action.id}`)),
      catchError(this.handleError<any>('updateAction'))
    );
   // return this.http.put<NewAction>(this._UpdateURL, action, this.httpOptions);
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
