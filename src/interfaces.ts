export interface CardProps {
  image: string;
  name: string;
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
  };
}
