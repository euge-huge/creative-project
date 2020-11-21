import axios from "axios";
import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  AUTH_ERROR,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "./types";

import { setError } from "./errorAction";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get("http://localhost:5000/api/auth/user", tokenConfig(getState))
    .then((res) => {
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch((err) => {
      dispatch(setError(err.response.data.msg, "LOAD_FAIL"));
      dispatch({ type: AUTH_ERROR });
    });
};

export const loginUser = (form) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/auth/login", form)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch(setError(err.response.data.msg, "LOGIN_FAIL"));
      dispatch({ type: LOGIN_FAIL });
    });
};

export const registerUser = (form) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/auth/register", form)
    .then((res) => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch(setError(err.response.data.msg, "REGISTER_FAIL"));
      dispatch({ type: REGISTER_FAIL });
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch(setError("Вы вышли из системы", "LOGOUT_SUCCESS"));
  dispatch({ type: LOGOUT_SUCCESS });
};

// Собираем токен и создаем конфигурацию для запроса
export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  // Header
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
