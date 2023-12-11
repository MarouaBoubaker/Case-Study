import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AlbumDetailComponent } from './album-detail.component';
import { AlbumListComponent } from "../album-list/album-list.component";

const routes: Routes = [
  { path: '', component: AlbumListComponent },
  { path: 'album/:id', loadChildren: () => import('./album-detail.module').then(m => m.AlbumDetailModule) },
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [CommonModule,AlbumDetailComponent, RouterModule.forChild(routes)],
})
export class AlbumDetailModule {}
