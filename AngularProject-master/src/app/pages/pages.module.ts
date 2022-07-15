import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CommentsComponents } from './comments/comments.component';
import {albumsComponents} from './albums/albums.component';
import {todosComponents} from './todos/todos.component';
import {usersComponents} from "./users/users.component";
import {photosComponents} from "./photos/photos.component";


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CommentsComponents,
    albumsComponents,
    todosComponents,
    usersComponents,
    photosComponents,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CommentsComponents,
  ]
})
export class PagesModule { }
