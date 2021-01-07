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
  TASKS_CLEAN,
  CLEAR_ALL_TRANSACTION,
  CLEAR_ALL_SCHEDULE,
  USER_INFO_UPDATED,
} from "./types";

import { setError } from "./errorAction";
import { loadAllTasks } from "./tasksAction";
import { loadAllTransaction } from "./moneyActions";
import { loadAllCalendarDays } from "./scheduleAction";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get("http://localhost:5000/api/auth/user", tokenConfig(getState))
    .then((res) => {
      dispatch({ type: USER_LOADED, payload: res.data });
      dispatch(loadAllTasks());
      dispatch(loadAllTransaction());
      dispatch(loadAllCalendarDays());
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
      dispatch(loadAllTasks());
      dispatch(loadAllTransaction());
      dispatch(loadAllCalendarDays());
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
      console.log(res.data)
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
  dispatch({type: TASKS_CLEAN});
  dispatch({type: CLEAR_ALL_TRANSACTION});
  dispatch({type: CLEAR_ALL_SCHEDULE});
};

export const updateUserInfo = (id, toUpdate) => (dispatch, getState) => {
  axios.put("http://localhost:5000/api/auth/update/" + id, toUpdate, tokenConfig(getState))
    .then(res => {
      dispatch({type: USER_INFO_UPDATED, payload: {...res.data, ...toUpdate}})
    })
};

export const deleteUser = (id) => async (dispatch, getState) => {
  dispatch({type: USER_LOADING});
  await axios.delete("http://localhost:5000/api/tasks/delete-for-user/" + id, tokenConfig(getState));
  await axios.delete("http://localhost:5000/api/transactions/delete-for-user/" + id, tokenConfig(getState));
  await axios.delete("http://localhost:5000/api/schedule/delete-for-user/" + id, tokenConfig(getState));
  await axios.delete("http://localhost:5000/api/auth/delete/" + id, tokenConfig(getState))
  dispatch(logoutUser());
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
