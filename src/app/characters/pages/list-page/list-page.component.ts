import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/character.interface';
import { CharacterService } from '../../services/characters.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [],
})
export class ListPageComponent implements OnInit {
  public characters: Result[] = [];

  constructor(private charactersService: CharacterService) {}
  ngOnInit(): void {
    this.charactersService
      .getCharacters()
      .subscribe((characters) => (this.characters = characters.results));
  }
}
