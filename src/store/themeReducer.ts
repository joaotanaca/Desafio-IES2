import {BaseThemeInterface} from '../interfaces';
import {lightTheme} from '../styles/theme';
import {SWITCH_THEME} from './actions';

const initialState = {
  theme: {...lightTheme},
};

const themeReducer = (
  state = initialState,
  action: {type: string; baseTheme: BaseThemeInterface},
) => {
  switch (action.type) {
    case SWITCH_THEME:
      let newState = {
        ...state,
        theme: {...state.theme, ...action.baseTheme},
      };
      return newState;
    default:
      return state;
  }
};

export default themeReducer;
