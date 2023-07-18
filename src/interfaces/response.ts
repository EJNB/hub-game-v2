export interface FetchGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: Date;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings?: any;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status?: any;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: Date;
  esrb_rating: EsrbRating;
  platforms: Platform[];
}

export interface EsrbRating {
  id: number;
  slug: string;
  name: string;
}

export interface Platform {
  platform: EsrbRating;
  released_at: string;
  requirements: Requirements;
}

export interface Requirements {
  minimum: string;
  recommended: string;
}
