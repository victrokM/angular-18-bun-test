import { Info } from './info.model';

enum Gender {
  'MALE' = 'Male',
  'FEMALE' = 'Female',
  'GENDERLESS' = 'Genderless',
  'UNKNOWN' = 'unknown',
}

export interface linkedElements {
  name: string;
  url: string;
}

export interface CharacterResponse {
  info: Info;
  results: Character[];
}

export interface origin extends linkedElements {}
export interface location extends linkedElements {}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: Gender;
  origin: origin;
  location: location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
