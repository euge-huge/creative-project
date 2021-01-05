import axios from 'axios';
import {
    TASKS_LOADING,
    TASKS_LOADED,
    TASKS_CREATED,
    TASKS_DELETED
} from "./types";

export const createTask = (newTask) => (dispatch, getState) => {
    axios.post("http://localhost:5000/api/tasks/add", newTask, tokenConfig(getState))
        .then((res) => {
            dispatch({type: TASKS_CREATED, payload: res.data})
        })
        .catch((res) => {
            console.log(res.data);
        })
}

export const loadAllTasks = () => (dispatch, getState) => {
    dispatch({type: TASKS_LOADING});
    axios.get("http://localhost:5000/api/tasks", tokenConfig(getState))
        .then(res => {
            dispatch({type: TASKS_LOADED, payload: res.data});
        })
        .catch(err => console.log("ERROR"))
}

export const deleteTask = (id) => (dispatch, getState) => {
  axios.delete("http://localhost:5000/api/tasks/delete/" + id, tokenConfig(getState))
    .then(res => [
      dispatch({type: TASKS_DELETED, payload: res.data})
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

