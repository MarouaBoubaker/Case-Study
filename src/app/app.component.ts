import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { AppModule } from "./app.module";

import { AlbumListComponent } from "./album-list/album-list.component";
import { AlbumDetailComponent } from "./album-detail/album-detail.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppModule, AlbumListComponent, AlbumDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'music-albums';
}
