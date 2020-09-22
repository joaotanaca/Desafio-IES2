export interface CardProps {
  id: number;
  image: {
    medium: string;
    original: string;
  };
  name: string;
  genres: [];
  officialSite: string;
}

export interface MoviesMapProps {
  show: {
    id: number;
    name: string;
    url: string;
    image: {
      medium: string;
      original: string;
    };
    genres: [];
    officialSite: string;
  };
}

export interface BaseThemeInterface {
  mode: string;
  PRIMARY_BACKGROUND_COLOR: string;
  SECONDARY_BACKGROUND_COLOR: string;
  PRIMARY_TEXT_COLOR: string;
  SECONDARY_TEXT_COLOR: string;
  PRIMARY_BUTTON_COLOR: string;
  SECONDARY_BUTTON_COLOR: string;
}

export interface stateRedux {
  themeReducer: {
    theme: BaseThemeInterface;
  };
  cartReducer: Movie[];
}

export interface Movie {
  id: number;
  name: string;
  genres: [];
  officialSite: string;
  image: {
    medium: string;
    original: string;
  };
}
