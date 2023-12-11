import { NgModule } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { AppComponent } from "./app.component";
import { AlbumListComponent } from "./album-list/album-list.component";
import { AlbumDetailComponent } from "./album-detail/album-detail.component";
import { HttpClientModule } from "@angular/common/http";
import { AlbumService } from "./services/album.service";
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    NgOptimizedImage,
    AppComponent,
    AlbumDetailComponent,
    AlbumListComponent,
    DragDropModule
  ],
  providers: [AlbumService],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule {}
