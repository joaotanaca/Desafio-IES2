import {Movie} from '../interfaces';
import {ADD_MOVIE, REMOVE_MOVIE, FINISH_CART} from './actions';

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
    case FINISH_CART:
      console.log(state);
      return initialState;
    default:
      return state;
  }
};

export default cartReducer;
