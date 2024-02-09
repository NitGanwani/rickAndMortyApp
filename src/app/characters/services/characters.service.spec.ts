import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CharacterService } from './characters.service';
import { Characters } from '../interfaces/character.interface';

describe('CharacterService', () => {
  let service: CharacterService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharacterService],
    });

    service = TestBed.inject(CharacterService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should retrieve characters', () => {
    const mockCharacters = {
      info: {
        count: 2,
        pages: 1,
        next: 'https://rickandmortyapi.com/api/character?page=2',
        prev: null,
      },
      results: [
        {
          name: 'Rick Sanchez',
          type: 'Alive',
        },
        {
          name: 'Morty Smith',
          status: 'Alive',
        },
      ],
    } as unknown as Characters;

    service.getCharacters().subscribe((characters) => {
      expect(characters.results.length).toBe(2);
    });

    const req = httpTestingController.expectOne(`${service.baseUrl}/character`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockCharacters);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
