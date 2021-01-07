import axios from 'axios'
import { ADD_FRAGMENT, DELETE_FRAGMENT, SCHEDULE_LOADED, SCHEDULE_LOADING } from "./types";

export const loadAllCalendarDays = () => (dispatch, getState) => {
    dispatch({type: SCHEDULE_LOADING});
    axios.get("http://localhost:5000/api/schedule", tokenConfig(getState))
        .then(res => {
            dispatch({type: SCHEDULE_LOADED, payload: res.data});
        })
        .catch(err => console.log("ERROR"))
}

export const createCalendarDay = (newFragment) => (dispatch, getState) => {
    axios.post("http://localhost:5000/api/schedule/add", newFragment, tokenConfig(getState))
        .then((res) => {
            dispatch({type: ADD_FRAGMENT, payload: res.data})
        })
        .catch((res) => {
            console.log(res.data);
        })
}

export const deleteCalendarDay = (id) => (dispatch, getState) => {
  axios.delete("http://localhost:5000/api/schedule/delete/" + id, tokenConfig(getState))
    .then(res => [
      dispatch({type: DELETE_FRAGMENT, payload: res.data})
    ])
}


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