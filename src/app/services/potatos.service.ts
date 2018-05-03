import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { Potato } from '../models/potato.model';

@Injectable()
export class PotatosService {
  page: number;
  private params: String = '?tags=potato&tagmode=all&format=json&jsoncallback=JSONP_CALLBACK';
  private API_PATH: String = 'https://api.flickr.com/services/feeds/photos_public.gne' + this.params;

  constructor(private http: HttpClient) {
    this.page = 1;
  }

  retrievePotatos(): Observable<Potato[]> {
    this.page++; // Increment for pagination
    return this.http
      .jsonp<Potato[]>(`${this.API_PATH}&page=${this.page}`, 'JSONP_CALLBACK')
      .pipe(
        map(result => this.serializeResult(result)),
        catchError((error: any) => Observable.throw(error)));
  }

  private serializeResult(result: any): Potato[] | null {
    return result.items ? result.items : null;
  }

}
