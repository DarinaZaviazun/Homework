import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {IPost} from '../interfaces/post';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PostService} from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResoleService implements Resolve<IPost[]>{

  constructor(private postService: PostService) { }

  resolve(): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postService.getPosts();
  }
}
