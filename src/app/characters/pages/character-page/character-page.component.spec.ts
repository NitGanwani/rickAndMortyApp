import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CharacterPageComponent } from './character-page.component';
import { CharacterService } from '../../services/characters.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Character } from '../../interfaces/character.interface';
import { Location } from '../../interfaces/location.interface';

describe('CharacterPageComponent', () => {
  let component: CharacterPageComponent;
  let fixture: ComponentFixture<CharacterPageComponent>;
  let characterService: jasmine.SpyObj<CharacterService>;

  beforeEach(async () => {
    const characterServiceSpy = jasmine.createSpyObj('CharacterService', [
      'getCharacter',
      'getLocation',
    ]);

    await TestBed.configureTestingModule({
      declarations: [CharacterPageComponent],
      imports: [HttpClientTestingModule, MatProgressSpinnerModule],
      providers: [
        { provide: CharacterService, useValue: characterServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterPageComponent);
    component = fixture.componentInstance;
    characterService = TestBed.inject(
      CharacterService
    ) as jasmine.SpyObj<CharacterService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getCharacter on init', fakeAsync(() => {
    const mockCharacter = {
      id: 1,
      name: 'Rick Sanchez',
      location: { url: 'https://rickandmortyapi.com/api/location/1' },
    } as unknown as Character;

    const mockLocation = {
      id: 1,
      name: 'Earth (C-137)',
    } as unknown as Location;

    characterService.getCharacter.and.returnValue(of(mockCharacter));
    characterService.getLocation.and.returnValue(of(mockLocation));

    fixture.detectChanges();
    tick(500);

    expect(characterService.getCharacter).toHaveBeenCalledWith(1);
    expect(component.character).toEqual(mockCharacter);
  }));
});
