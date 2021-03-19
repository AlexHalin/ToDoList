import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FbCreateResponse, ToDoList} from './interfaces';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ListService {
  constructor(private http: HttpClient) {
  }

  create(list: ToDoList): Observable<ToDoList> {
    return this.http.post(`${environment.fbDbUrl}/lists.json`, list)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...list,
          id: response.name
        };
      }));
  }


  getAll(): Observable<ToDoList[]> {
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

  getById(id: string): Observable<ToDoList> {
    return this.http.get<ToDoList>(`${environment.fbDbUrl}/lists/${id}.json`)
      .pipe(map((list: ToDoList) => {
        return {
          ...list,
          id
        };
      }));
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDbUrl}/lists/${id}.json`);
  }

  update(list: ToDoList): Observable<ToDoList> {
    return this.http.patch<ToDoList>(`${environment.fbDbUrl}/lists/${list.id}.json`, list);
  }

}
