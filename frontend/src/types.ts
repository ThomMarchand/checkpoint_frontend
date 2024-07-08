// TODO
export interface Country {
  code: string;
  emoji: string;
  id: number;
  name: string;
}

export interface CountryWithContinent extends Country {
  name: string;
  id: number;
}
