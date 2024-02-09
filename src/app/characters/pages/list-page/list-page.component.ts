import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Character } from '../../interfaces/character.interface';
import { CharacterService } from '../../services/characters.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
})
export class ListPageComponent implements OnInit {
  public characters: Character[] = [];
  public currentPage: number = 1;
  public totalPages: number = 0;

  constructor(private charactersService: CharacterService) {}
  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(page: number = 1): void {
    this.charactersService.getCharacters(page).subscribe((data) => {
      this.characters = data.results;
      this.totalPages = data.info.pages;
      this.currentPage = page;
    });
  }

  goToPage(page: number): void {
    this.loadCharacters(page);
  }

  handlePageEvent(event: PageEvent) {
    this.goToPage(event.pageIndex + 1);
  }
}
