import { CHANGE_COLOR } from '../actions/type';


let initialState = {
  color: "white"
}

export default function mainReducer (state = initialState, action) {
  switch ( action.type) {
    case CHANGE_COLOR:
    return {
      ...state,
      color: action.color
    }

    default:
      return state;
  }
};
