import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/characters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styles: [],
})
export class CharacterPageComponent implements OnInit {
  public character?: Character;
  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(2000),
        switchMap(({ id }) => this.characterService.getCharacter(id))
      )
      .subscribe((character) => {
        if (!character) return this.router.navigate(['/characters/list']);
        this.character = character;
        return;
      });
  }
}
