import { ADD_FRAGMENT, CLEAR_ALL_SCHEDULE, DELETE_FRAGMENT, SCHEDULE_LOADED, SCHEDULE_LOADING } from "../actions/types";

const initialState = {
  loading: false,
  all: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SCHEDULE_LOADING:
      return {
        ...state,
        loading: true
      }
    case SCHEDULE_LOADED:
      return {
        ...state,
        all: action.payload,
        loading: false
      }
    case ADD_FRAGMENT:
      return {
        ...state,
        all: [...state.all, action.payload]
      }
    case DELETE_FRAGMENT:
      return {
        ...state,
        all: state.all.filter(day => day._id !== action.payload._id)
      }
    case CLEAR_ALL_SCHEDULE:
      return {
        ...state,
        all: []
      }
    default:
      return state;
  }
}
