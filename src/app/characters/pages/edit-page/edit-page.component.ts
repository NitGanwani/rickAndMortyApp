import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styles: [],
})
export class EditPageComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditPageComponent>,
    @Inject(MAT_DIALOG_DATA) public character: Character
  ) {
    this.form = this.fb.group({
      name: [character.name, Validators.required],
      location: [character.location.name, Validators.required],
      status: [character.status, Validators.required],
    });
  }

  onSave() {
    const editedCharacter = {
      ...this.character,
      name: this.form.value.name,
      location: { ...this.character.location, name: this.form.value.location },
      status: this.form.value.status,
    };
    this.dialogRef.close(editedCharacter);
  }
}
