import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import moneyReducer from "./moneyReducer";
import tasksReducer from "./tasksReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  tasks: tasksReducer,
  money: moneyReducer,
});
