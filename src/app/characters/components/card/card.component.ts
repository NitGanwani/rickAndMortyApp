import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditPageComponent } from '../../pages/edit-page/edit-page.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'characters-character-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  public character!: Character;

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    if (!this.character) {
      throw new Error('Character is required');
    }
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditPageComponent, {
      width: '250px',
      data: { ...this.character },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.character = { ...result };
        this.openSnackBar(this.character.name + ' updated');
      }
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Done', {
      duration: 1800,
    });
  }
}
