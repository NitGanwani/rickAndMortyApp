import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/characters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, delay, of, switchMap } from 'rxjs';
import { Character } from '../../interfaces/character.interface';
import { Location } from '../../interfaces/location.interface';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css'],
})
export class CharacterPageComponent implements OnInit {
  public character?: Character;
  public characterLocation?: Location;
  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(500),
        switchMap(({ id }) => this.characterService.getCharacter(id)),
        switchMap((character) => {
          if (!character) {
            this.router.navigate(['/characters/list']);
            return EMPTY;
          }
          this.character = character;

          return character.location.url
            ? this.characterService.getLocation(character.location.url)
            : of(undefined);
        })
      )
      .subscribe((location) => {
        this.characterLocation = location;
      });
  }
}
