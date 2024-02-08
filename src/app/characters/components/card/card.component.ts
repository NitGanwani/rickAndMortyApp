import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditPageComponent } from '../../pages/edit-page/edit-page.component';

@Component({
  selector: 'characters-character-card',
  templateUrl: './card.component.html',
  styles: [],
})
export class CardComponent implements OnInit {
  @Input()
  public character!: Character;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    if (!this.character) {
      throw new Error('Character is required');
    }
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditPageComponent, {
      width: '250px',
      data: { ...this.character }, // Pass the current character data to the dialog
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Here you mock the update since you can't actually update the API
        this.character = { ...result };
      }
    });
  }
}
