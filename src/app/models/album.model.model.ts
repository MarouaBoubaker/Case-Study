export class Track {
  trackName: string;

  constructor(data: any) {
    this.trackName = data.trackName || '';
  }
}

export class AlbumModel {
  collectionId: string;
  collectionName: string;
  artistName: string;
  artworkUrl100: string;
  trackList: Track[];
  releaseDate: string;
  primaryGenreName: string;

  constructor(data: any) {
    this.collectionId = data.collectionId || '';
    this.collectionName = data.collectionName || '';
    this.artistName = data.artistName || '';
    this.artworkUrl100 = data.artworkUrl100 || '';
    this.trackList = data.trackList?.map((trackData: any) => new Track(trackData)) || [];
    this.releaseDate = data.releaseDate || '';
    this.primaryGenreName = data.primaryGenreName || '';
  }
}
