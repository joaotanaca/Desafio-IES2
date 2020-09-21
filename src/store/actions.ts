import {Dispatch} from 'redux';
import {BaseThemeInterface} from '../interfaces';

// define type
export const SWITCH_THEME = 'SWITCH_THEME';

// dispatch actions
export const switchTheme = (BaseTheme: BaseThemeInterface) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SWITCH_THEME,
      baseTheme: BaseTheme,
    });
  };
};
