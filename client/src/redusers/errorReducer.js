import { SET_ERROR, CLEAR_ERROR } from "../actions/types";

const initialState = {
  msg: null,
  id: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        msg: action.payload.msg,
        id: action.payload.id,
      };
    case CLEAR_ERROR:
      return {
        msg: null,
        id: null,
      };
    default:
      return state;
  }
}
