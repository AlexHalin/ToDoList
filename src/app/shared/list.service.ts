import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FbCreateResponse, List} from './interfaces';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ListService {
  constructor(private http: HttpClient) {
  }

  create(list: List): Observable<List> {
    return this.http.post(`${environment.fbDbUrl}/lists.json`, list)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...list,
          id: response.name
        };
      }));
  }

  getAll(): Observable<List[]> {
    return this.http.get(`${environment.fbDbUrl}/lists.json`)
      .pipe(map((response: { [key: string]: any }) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key
          }));
      }));
  }
}
