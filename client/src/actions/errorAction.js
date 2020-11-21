import { SET_ERROR, CLEAR_ERROR } from "./types";

export const setError = (msg, id) => {
  return {
    type: SET_ERROR,
    payload: { msg, id },
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};
