import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class QuoteService {

  constructor(private httpClient: HttpClient) { }

  getRandomQuote(): Observable<any> {
    return this.httpClient
      .get('https://api.chucknorris.io/jokes/random?category=explicit')
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load joke :-('))
      );
  }

}
