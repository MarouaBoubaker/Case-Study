import { RouterModule, Routes} from '@angular/router';
import { NgModule } from "@angular/core";

import { AlbumListComponent } from "./album-list/album-list.component";
import { AlbumDetailComponent } from "./album-detail/album-detail.component";

export const routes: Routes = [

  { path: 'list', component: AlbumListComponent },
  { path: 'album-detail/:id', component: AlbumDetailComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {
}
