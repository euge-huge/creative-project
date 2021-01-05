import axios from "axios";
import {TRANSACTION_LOADING, TRANSACTION_LOADED, ADD_INCOME, ADD_OUTCOME, DELETE_INCOME, DELETE_OUTCOME} from "../actions/types";

export const createTransaction = (newTransaction) => (dispatch, getState) => {
    axios.post("http://localhost:5000/api/transactions/add", newTransaction, tokenConfig(getState))
        .then((res) => {
            if (res.data.type === "income") {
              dispatch({type: ADD_INCOME, payload: res.data})
            } else {
              dispatch({type: ADD_OUTCOME, payload: res.data})
            }
        })
        .catch((res) => {
            console.log(res.data);
        })
}

export const loadAllTransaction = () => (dispatch, getState) => {
  dispatch({type: TRANSACTION_LOADING});
  axios.get("http://localhost:5000/api/transactions", tokenConfig(getState))
      .then(res => {
          dispatch({type: TRANSACTION_LOADED, payload: res.data});
      })
      .catch(err => console.log("ERROR"))
}

export const deleteTransaction = (id) => (dispatch, getState) => {
  axios.delete("http://localhost:5000/api/transactions/delete/" + id, tokenConfig(getState))
    .then(res => {
      if (res.data.type === "income") {
        dispatch({type: DELETE_INCOME, payload: res.data})
      } else {
        dispatch({type: DELETE_OUTCOME, payload: res.data})
      }
    })
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

