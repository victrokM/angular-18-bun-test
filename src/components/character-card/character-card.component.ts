import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  OnInit,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { Character } from '../../models/character.model';
import { JsonPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [NgOptimizedImage, JsonPipe],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCardComponent implements OnInit {
  character = input.required<Character>();
  characterInfo = input<Character>();
  loaded: OutputEmitterRef<string> = output();

  constructor() {
    effect(() => {
      console.log('characterInfo', this.characterInfo());
    });
  }

  ngOnInit(): void {
    this.loaded.emit(this.character().url);
  }
}
