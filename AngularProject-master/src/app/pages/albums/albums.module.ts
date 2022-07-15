import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { albumsRoutingModule } from './albums-routing.module';
import {albumsComponents } from './albums.component';


@NgModule({
  declarations: [
   albumsComponents
  ],
  imports: [
    CommonModule,
    albumsRoutingModule
  ]
})
export class AlbumsModule { }
