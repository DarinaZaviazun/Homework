import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {IPost} from '../../interfaces/post';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
  post: IPost;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value =>
      this.post = this.router.getCurrentNavigation().extras.state as IPost);
  }

  ngOnInit(): void {
  }

}
