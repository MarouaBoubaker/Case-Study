import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map, Observable } from "rxjs";

import { AlbumModel } from "../models/album.model.model";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'api/search';

  constructor(private http: HttpClient) {}

  //retrieve all albums from API
  searchAlbums(term: string): Observable<AlbumModel[]> {
    const searchUrl = `${this.apiUrl}?term=${term}&entity=album`;
    return this.http.get<any>(searchUrl).pipe(
      map((response: any) => {
        if (!response || !response.results || !Array.isArray(response.results)) {
          throw new Error('Invalid API response');
        }
        return response.results.map((result: any) => this.mapToAlbumModel(result));
      })
    );
  }

  private mapToAlbumModel(result: any): AlbumModel {
    return {
      collectionId: result.collectionId,
      collectionName: result.collectionName,
      artistName: result.artistName,
      artworkUrl100: result.artworkUrl100,
      trackList: result.trackCount ? this.generateTrackList(result.trackCount) : [],
      releaseDate: result.releaseDate,
      primaryGenreName: result.primaryGenreName
    };
  }

  private generateTrackList(trackCount: number): { trackName: string }[] {
    return Array.from({length: trackCount}, (_, index) => ({
      trackName: `Track ${index + 1}`,
    }));
  }
}
