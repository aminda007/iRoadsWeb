import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { DataItem } from '../entities/data-item';

@Injectable()
export class DataItemService {

  private rootUrl = 'http://iroads.projects.mrt.ac.lk:8080';

  private getAllDataUrl = this.rootUrl + '/getAll';



  constructor(private http: HttpClient) { }

  getAllData(): Observable<DataItem[]> {
    return this.http.get<DataItem[]>(this.getAllDataUrl).pipe(
      tap(dataItems => console.log(`fetched data`)),
      catchError(this.handleError('getAllData', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  log(message: string) {
    alert(message);
  }
}
