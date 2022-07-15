import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { photosRoutingModule } from './photos-routing.module';
import {photosComponents } from './photos.component';


@NgModule({
  declarations: [
   photosComponents
  ],
  imports: [
    CommonModule,
    photosRoutingModule
  ]
})
export class PhotosModule { }
