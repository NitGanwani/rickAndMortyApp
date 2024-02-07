import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/character`);
  }
}
