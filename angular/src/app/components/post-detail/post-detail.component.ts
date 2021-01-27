import { Component, OnInit } from '@angular/core';
import {IPost} from '../../interfaces/post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: IPost;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => this.post = history.state);
  }

  ngOnInit(): void {
  }

}
