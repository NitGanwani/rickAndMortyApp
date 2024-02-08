import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Character, Characters } from '../interfaces/character.interface';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCharacters(page?: number): Observable<Characters> {
    let queryParams = '';
    if (page) {
      queryParams = `?page=${page}`;
    }
    return this.http.get<Characters>(`${this.baseUrl}/character${queryParams}`);
  }

  getCharacter(id: number): Observable<Character | undefined> {
    return this.http
      .get<Character>(`${this.baseUrl}/character/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }

  searchCharacters(query: string): Observable<Characters> {
    return this.http.get<Characters>(`${this.baseUrl}/character?name=${query}`);
  }
}
