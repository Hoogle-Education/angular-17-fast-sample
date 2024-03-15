import { Routes } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';

export const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'posts'},
  {path: 'posts', component: PostsComponent}
];
