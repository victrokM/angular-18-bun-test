import { Character } from './../../models/character.model';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { CharactersService } from '../../services';
import { CharacterCardComponent } from '../character-card';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [AsyncPipe, CharacterCardComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContainerComponent {
  private CharacterService = inject(CharactersService);
  characterInfo: Record<string, Character> = {};
  Character$: Observable<Character[]> = this.CharacterService.getCharacters();

  async makeApiCall(url: string) {
    let character = await firstValueFrom(
      this.CharacterService.getCharacterInformation(url)
    );

    this.characterInfo[character.id] = character;
  }
}
