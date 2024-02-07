import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Character } from '../../interfaces/character.interface';
import { CharacterService } from '../../services/characters.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [],
})
export class SearchPageComponent {
  public searchInput = new FormControl('');
  public characters: Character[] = [];
  public notFoundCharacters: boolean = false;
  public selectedCharacter: Character | undefined;

  constructor(private characterService: CharacterService) {}

  searchCharacter() {
    const value: string = this.searchInput.value || '';
    this.characterService.searchCharacters(value).subscribe(
      (characters) => {
        this.characters = characters.results;
      },
      (error) => {
        if (error.status === 404) {
          this.notFoundCharacters = true;
          this.characters = [];
        }
      }
    );
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedCharacter = undefined;
      return;
    }

    const character: Character = event.option.value;
    this.searchInput.setValue(character.name);
    this.selectedCharacter = character;
  }
}
