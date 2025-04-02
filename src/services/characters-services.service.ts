import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character, CharacterResponse } from '../models/character.model';
import { characterAdapter } from '../adapters';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private mainurl: string = 'https://rickandmortyapi.com/api';
  private characterurl: string = this.mainurl + '/character';
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http
      .get<CharacterResponse>(this.characterurl)
      .pipe(map((result: CharacterResponse) => characterAdapter(result)));
  }

  getCharacterInformation(url: string): Observable<Character> {
    return this.http.get<Character>(url);
  }
}
