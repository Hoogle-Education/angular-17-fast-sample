import { Component, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonModule],
  providers: [ PostsService ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

  constructor(private postService: PostsService) {

  }

  columns = ["id", "title", "body"]

  posts$ = this.postService.getAll()

}
