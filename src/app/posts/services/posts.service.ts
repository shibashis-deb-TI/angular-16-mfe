import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}
@Injectable()
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getPost(): Observable<Post[]> {
    return this.httpClient
      .get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
      .pipe(map((post) => post));
  }
}
