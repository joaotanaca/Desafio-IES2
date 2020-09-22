import {Movie} from '../interfaces';
import {ADD_MOVIE, REMOVE_MOVIE} from './actions';

const initialState: Movie[] = [];

const cartReducer = (
  state = initialState,
  action: {type: string; movie: Movie},
) => {
  switch (action.type) {
    case ADD_MOVIE:
      return [...state, action.movie];
    case REMOVE_MOVIE:
      const movieRemoved = state.filter(
        (movie) => movie.id !== action.movie.id,
      );
      return movieRemoved;
    default:
      return state;
  }
};

export default cartReducer;
