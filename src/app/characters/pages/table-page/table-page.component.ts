import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CharacterService } from '../../services/characters.service';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css'],
})
export class TablePageComponent implements OnInit {
  displayedColumns: string[] = ['name', 'species', 'gender', 'status']; // Columns to display
  dataSource: Character[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characterService.getCharacters().subscribe((data) => {
      this.dataSource = data.results.slice(0, 10);
    });
  }
}
