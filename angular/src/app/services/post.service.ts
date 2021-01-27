import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPost} from '../interfaces/post';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }
  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url);
  }
}
