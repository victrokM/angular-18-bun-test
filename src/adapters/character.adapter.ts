import { CharacterResponse } from '../models/character.model';

export const characterAdapter = (characterInfo: CharacterResponse): any => {
  return characterInfo.results;
};
