import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { AsyncPipe, DatePipe, NgForOf, NgIf, NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  templateUrl: './album-detail.component.html',
  imports: [
    NgIf,
    NgOptimizedImage,
    AsyncPipe,
    RouterOutlet,
    NgForOf,
    DatePipe
  ],
  styleUrl: './album-detail.component.scss'
})
export class AlbumDetailComponent implements OnInit {
  albumData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeData = this.route.snapshot.paramMap.get('id');
    if (routeData) {
      const collectionId = routeData;
      this.albumData = history.state.albumData;
    }
  }
}
