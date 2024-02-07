import { Component, OnInit } from '@angular/core';
import { Character, Characters } from '../../interfaces/character.interface';
import { CharacterService } from '../../services/characters.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [],
})
export class ListPageComponent implements OnInit {
  public characters: Character[] = [];

  constructor(private charactersService: CharacterService) {}
  ngOnInit(): void {
    this.charactersService
      .getCharacters()
      .subscribe((characters) => (this.characters = characters.results));
  }
}
