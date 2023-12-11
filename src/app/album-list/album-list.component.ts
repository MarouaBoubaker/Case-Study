import { Component, OnInit} from '@angular/core';
import { NgForOf, NgIf, SlicePipe } from "@angular/common";
import { Router, RouterOutlet } from "@angular/router";
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from "@angular/cdk/drag-drop";

import {InfiniteScrollModule} from "ngx-infinite-scroll";

import { AlbumService } from "../services/album.service";
import { SortingService } from "../services/sorting.service";

import { AlbumDetailComponent } from "../album-detail/album-detail.component";

@Component({
  selector: 'app-album-list',
  standalone: true,
  templateUrl: './album-list.component.html',
  imports: [
    NgForOf,
    NgIf,
    RouterOutlet,
    AlbumDetailComponent,
    CdkDropList,
    CdkDrag,
    InfiniteScrollModule,
    SlicePipe
  ],
  styleUrl: './album-list.component.scss'
})
export class AlbumListComponent implements OnInit {
  albums: any[] = [];
  sortedAlbums: any[] = [];

  itemsToShow = 6;
  totalItems: number = 0;

  scrollDistance = 2;
  scrollUpDistance = 1.5;

  constructor(private albumService: AlbumService,
              private sortingService: SortingService,
              private router: Router) {}

  ngOnInit(): void {
   this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.albumService.searchAlbums('Beatles').subscribe((results) => {
      this.albums = results;
      this.totalItems = this.albums.length;
    });
  }

  loadMore(): void {

    const remainingItems = this.totalItems - this.itemsToShow;
    const itemsToLoad = Math.min(5, remainingItems); // Load up to 5 items or the remaining ones

    if (itemsToLoad > 0) {
      this.itemsToShow += itemsToLoad;
    }
  }

  goToDetails(collectionId: string): void {
    const selectedAlbum = this.albums.find((album) => album.collectionId === collectionId);
    console.log(selectedAlbum);
    if (selectedAlbum) {
      this.router.navigate(['/album-detail', collectionId], { state: { albumData: selectedAlbum } });
    }
  }
//Sorting enabled by clicking the button
  sortListByReleaseDate() {
    this.sortingService.sortByReleaseDate(this.albums).subscribe(sortedAlbums => {
      this.sortedAlbums = sortedAlbums;
    });
  }
//Sorting function With Drag and Drop
  onDrop(event: CdkDragDrop<any[]>): void {
    moveItemInArray(this.albums, event.previousIndex, event.currentIndex);
  }

}
