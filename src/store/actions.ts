import {Dispatch} from 'redux';
import {BaseThemeInterface, Movie} from '../interfaces';

// define type
export const SWITCH_THEME = 'SWITCH_THEME';

export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';

// dispatch actions
export const switchTheme = (BaseTheme: BaseThemeInterface) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SWITCH_THEME,
      baseTheme: BaseTheme,
    });
  };
};

export const addCart = (movie: Movie) => (dispatch: Dispatch) => {
  dispatch({
    type: ADD_MOVIE,
    movie,
  });
};

export const removeCart = (movie: Movie) => (dispatch: Dispatch) => {
  dispatch({
    type: REMOVE_MOVIE,
    movie,
  });
};
