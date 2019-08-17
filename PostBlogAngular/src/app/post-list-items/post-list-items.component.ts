import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/posts.model';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-items',
  templateUrl: './post-list-items.component.html',
  styleUrls: ['./post-list-items.component.scss']
})
export class PostListItemsComponent implements OnInit, OnDestroy {

  posts: Post[];
  postSubscription: Subscription;

  constructor(  private postsService: PostsService,
                private router: Router) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPost();
  }

  onAction(post: Post, value: number) {
    this.postsService.onAction(post, value);
  }
  getColor(post: Post) {
    return this.postsService.getColor(post);
  }
  getColorText(post: Post) {
   return this.postsService.getColorText(post);
  }
  onNewPost() {
    this.router.navigate(['/posts/', 'newpost']);
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  onViewPost(id: number) {
    this.router.navigate(['/posts/', id]);
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
