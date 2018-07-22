import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Post } from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
<<<<<<< HEAD
};
=======
}
>>>>>>> 805dab35150855e311e78d7e4dbeef803aa0c48b

@Injectable()
export class PostService {
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  getPosts(): Observable<Post[]> {
=======
  getPosts() : Observable<Post[]> {
>>>>>>> 805dab35150855e311e78d7e4dbeef803aa0c48b
    return this.http.get<Post[]>(this.postsUrl);
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }

<<<<<<< HEAD
  updatePost(post: Post): Observable<Post> {
=======
  updatePost(post: Post) :Observable<Post> {
>>>>>>> 805dab35150855e311e78d7e4dbeef803aa0c48b
    const url = `${this.postsUrl}/${post.id}`;

    return this.http.put<Post>(url, post, httpOptions);
  }

<<<<<<< HEAD
  getPost(id: number): Observable<Post> {
=======
  getPost(id: number) :Observable<Post> {
>>>>>>> 805dab35150855e311e78d7e4dbeef803aa0c48b
    const url = `${this.postsUrl}/${id}`;

    return this.http.get<Post>(url);
  }

  removePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postsUrl}/${id}`;

    return this.http.delete<Post>(url, httpOptions);
  }
}
