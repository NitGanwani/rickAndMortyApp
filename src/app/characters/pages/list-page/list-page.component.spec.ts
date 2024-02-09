import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPageComponent } from './list-page.component';
import { CharacterService } from '../../services/characters.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Characters } from '../../interfaces/character.interface';

describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;
  let characterServiceSpy: jasmine.SpyObj<CharacterService>;

  beforeEach(async () => {
    characterServiceSpy = jasmine.createSpyObj('CharacterService', [
      'getCharacters',
    ]);

    await TestBed.configureTestingModule({
      declarations: [ListPageComponent],
      imports: [MatPaginatorModule, NoopAnimationsModule], // Include necessary modules
      providers: [{ provide: CharacterService, useValue: characterServiceSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Avoid errors on unknown elements
    }).compileComponents();

    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;

    const mockCharacters = {
      info: { pages: 10, count: 100 },
      results: [
        { id: 1, name: 'Rick Sanchez' },
        { id: 2, name: 'Morty Smith' },
      ],
    } as unknown as Characters;
    characterServiceSpy.getCharacters.and.returnValue(of(mockCharacters));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load characters on init', () => {
    expect(characterServiceSpy.getCharacters).toHaveBeenCalledOnceWith(1);
    expect(component.characters.length).toBe(2);
    expect(component.totalPages).toBe(10);
  });

  it('should handle page event and load characters for the specified page', () => {
    const pageEvent = { pageIndex: 1 } as PageEvent;
    component.handlePageEvent(pageEvent);
    expect(characterServiceSpy.getCharacters).toHaveBeenCalledWith(2);
  });
});
