import { Component } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { title } from 'process';
import { Post } from '../../../models/post';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  providers: [ PostsService ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  postForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostsService
  ) {
    this.postForm = formBuilder.group({
      id: [1, [Validators.required, Validators.max(1000), Validators.min(0)]],
      title: ['', Validators.required],
      body: ['']
    })
  }

  handleSubmit() {
    if(this.postForm.valid) {
      const { id, title, body } = this.postForm.getRawValue()
      const post: Post = {id, title, body}
      this.postService.create(post)
    }
  }

}
