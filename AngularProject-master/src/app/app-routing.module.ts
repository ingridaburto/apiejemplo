import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { CommentsComponents } from './pages/comments/comments.component';
import {albumsComponents} from './pages/albums/albums.component';
import {todosComponents} from "./pages/todos/todos.component";
import {usersComponents} from "./pages/users/users.component";
import {photosComponents} from "./pages/photos/photos.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'posts',
    // loadChildren: './pages/posts/posts.module#PostsModule'
    loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'comments',
    component: CommentsComponents
  },
  {
    path: 'albums',
    component: albumsComponents
  },
  {
    path:'todos',
    component: todosComponents
  },
  {
    path:'users',
    component: usersComponents
  },
  {
    path:'photos',
    component: photosComponents
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
