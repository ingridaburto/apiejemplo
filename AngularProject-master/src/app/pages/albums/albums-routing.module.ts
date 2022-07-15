import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { albumsComponents } from './albums.component';

const routes: Routes = [
  {
    path: '',  // No se coloca texto en el path
    component: albumsComponents
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class albumsRoutingModule { }
