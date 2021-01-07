import { ADD_INCOME, TRANSACTION_LOADED, TRANSACTION_LOADING, ADD_OUTCOME, DELETE_OUTCOME, DELETE_INCOME, CLEAR_ALL_TRANSACTION} from "../actions/types";

const initialState = {
    loading: false,
    all: [],
    income: [],
    outcome: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case TRANSACTION_LOADING:
            return {
                ...state,
                loading: true
            }
        case TRANSACTION_LOADED:
            return {
                ...state,
                all: action.payload,
                income: action.payload.filter(trans => trans.type === "income"),
                outcome: action.payload.filter(trans => trans.type === "outcome"),
                loading: false
            }
        case ADD_INCOME:
            return {
                ...state,
                all: [...state.all, action.payload],
                income: [...state.income, action.payload]
            }
        case ADD_OUTCOME:
            return {
                ...state,
                all: [...state.all, action.payload],
                outcome: [...state.outcome, action.payload]
            }
        case DELETE_OUTCOME:
            return {
                ...state,
                outcome: state.outcome.filter(trans => trans._id !== action.payload._id),
                all: state.all.filter(trans => trans._id !== action.payload._id)
            }
        case DELETE_INCOME:
            return {
                ...state,
                income: state.income.filter(trans => trans._id !== action.payload._id),
                all: state.all.filter(trans => trans._id !== action.payload._id)
            }
        case CLEAR_ALL_TRANSACTION:
            return {
                ...state,
                all: [],
                income: [],
                outcome: []
            }
        default:
            return state;
    }
}