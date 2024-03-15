import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = "https://jsonplaceholder.typicode.com"

  constructor(
    private http: HttpClient
  ) {
  }

  getAll() {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`)
  }

  create(post: Post) {
    return this.http.post(`${this.baseUrl}/posts`, post);
  }
}
