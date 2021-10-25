import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../../pages/welcome/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  readonly endpoint = environment.apiEndpoint + 'todos';

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.endpoint + '?sortBy=createdAt&order=desc');
  }

  create(params: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.endpoint, params);
  }

  update(id: number, params: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>(this.endpoint + '/' + id, params);
  }

  delete(id: number): Observable<Todo> {
    return this.httpClient.delete<Todo>(this.endpoint + '/' + id);
  }


}
