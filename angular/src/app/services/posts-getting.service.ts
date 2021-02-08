import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IPost} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsGettingService {
  private subj = new BehaviorSubject<number>(0);
  constructor(private httpClient: HttpClient) {
  }
  getPosts(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getPost(id): Observable<IPost>{
    return this.httpClient.get<IPost>('https://jsonplaceholder.typicode.com/posts/' + id);
  }
  getFlag(): number{
    return this.subj.getValue();
  }

  setFlag(id: number): void{
    this.subj.next(id);
  }
}
