import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

import { Post } from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
<<<<<<< HEAD
  };
  isEdit: boolean;

  constructor(private postService: PostService) {
    this.isEdit = false;
  }

  ngOnInit() {
=======
  }
  isEdit: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit() {  
>>>>>>> 805dab35150855e311e78d7e4dbeef803aa0c48b
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  onUpdatedPost(post: Post) {
    this.posts.forEach((cur, index) => {
<<<<<<< HEAD
      if (post.id === cur.id) {
=======
      if(post.id === cur.id) {
>>>>>>> 805dab35150855e311e78d7e4dbeef803aa0c48b
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
<<<<<<< HEAD
        };
=======
        }
>>>>>>> 805dab35150855e311e78d7e4dbeef803aa0c48b
      }
    });
  }

  removePost(post: Post) {
<<<<<<< HEAD
    if (confirm('Are You Sure?')) {
      this.postService.removePost(post.id).subscribe(() => {
        this.posts.forEach((cur, index) => {
          if (post.id === cur.id) {
            this.posts.splice(index, 1);
=======
    if(confirm('Are You Sure?')) {
      this.postService.removePost(post.id).subscribe(() => {
        this.posts.forEach((cur, index) => {
          if(post.id === cur.id) {
            this.posts.splice(index, 1);  
>>>>>>> 805dab35150855e311e78d7e4dbeef803aa0c48b
          }
        });
      });
    }
  }

}
