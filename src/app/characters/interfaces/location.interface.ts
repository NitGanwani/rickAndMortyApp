// Generated by https://quicktype.io

export interface Locations {
  info: Info;
  results: Location[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
