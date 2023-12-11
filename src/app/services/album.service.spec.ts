import { TestBed } from '@angular/core/testing';
import { AlbumService } from './album.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlbumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlbumService],
    });
  });

  it('should be created', () => {
    const service: AlbumService = TestBed.inject(AlbumService);
    expect(service).toBeTruthy();
  });
});
