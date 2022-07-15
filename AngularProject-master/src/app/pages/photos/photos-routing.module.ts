import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { photosComponents } from './photos.component';

const routes: Routes = [
  {
    path: '',  // No se coloca texto en el path
    component: photosComponents
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class photosRoutingModule { }
