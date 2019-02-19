import { Permissions } from './../Model/Permission.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckPermessionService {
  [x: string]: any;
  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
  private _PermissionURl = 'https://loggitor-be-test.herokuapp.com/getEventInsTable/2019-02-12';
  constructor(private http: HttpClient) { }
  getPermession(): Observable<Permissions> {
    return this.http.get<Permissions>(this._PermissionURl);
  }
  postPermession(id): Observable<Permissions> {
    return this.http.post<Permissions>(this._PermissionURl, id, this.httpOptions)
    .pipe(
      tap((s: Permissions) => console.log(id)),
      catchError(this.handleError<Permissions>('addActions'))
    );
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
