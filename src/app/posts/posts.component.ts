import { Component, OnInit, inject } from '@angular/core';
import { Post, PostService } from './services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  private postService = inject(PostService);
  posts!: Post[];

  ngOnInit(): void {
    this.postService.getPost().subscribe((post) => {
      this.posts = post;
    });
  }
}
