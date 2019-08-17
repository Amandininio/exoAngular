import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/posts.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  post: Post;
  date: Date = new Date();

  constructor(  private route: ActivatedRoute,
                private postServise: PostsService,
                private router: Router) { }

  ngOnInit() {
    this.post = new Post ('', '', 0 );
    const id = this.route.snapshot.params['id'];
    this.postServise.getSinglePost(+id).then(
      (post: Post) => {
        this.post = post;
      }
    );
  }

  onBack() {
    this.router.navigate(['/posts']);
  }

}
