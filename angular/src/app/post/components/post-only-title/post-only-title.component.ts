import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../interfaces/post-interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-only-title',
  templateUrl: './post-only-title.component.html',
  styleUrls: ['./post-only-title.component.css']
})
export class PostOnlyTitleComponent implements OnInit {
  @Input() post: IPost;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  goToPost(): void{
    this.router.navigate([this.post.id], {
      relativeTo: this.activatedRoute,
      state: this.post
    });
  }

}
