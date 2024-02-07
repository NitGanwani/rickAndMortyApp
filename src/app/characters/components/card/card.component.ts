import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'characters-character-card',
  templateUrl: './card.component.html',
  styles: [],
})
export class CardComponent implements OnInit {
  @Input()
  public character!: Character;

  ngOnInit(): void {
    if (!this.character) {
      throw new Error('Character is required');
    }
  }
}
