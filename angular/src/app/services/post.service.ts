import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../interfaces/user-interface';
import {IPost} from '../interfaces/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  public getPosts(id: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts?userId=' + id);
  }
}


