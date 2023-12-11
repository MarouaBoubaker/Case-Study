import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SortingService {
  sortByReleaseDate(albums: any[]): Observable<any[]> {
    return of(albums).pipe(
      map(albumsCopy =>
        albumsCopy.sort((a, b) => {
          const dateA = new Date(a.releaseDate).getTime();
          const dateB = new Date(b.releaseDate).getTime();
          return dateA - dateB;
        })
      )
    );
  }
}
