import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CharacterPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    SearchPageComponent,
    EditPageComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class CharactersModule {}
