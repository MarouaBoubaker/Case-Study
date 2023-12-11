import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
  ],
})
export class AlbumListModule {}
