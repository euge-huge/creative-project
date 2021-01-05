import {TASKS_CREATED, TASKS_LOADED, TASKS_LOADING, TASKS_DELETED, TASKS_CLEAN} from '../actions/types'

const initialState = {
    all: [],
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case TASKS_LOADING:
            return {
                ...state,
                loading: true
            }
        case TASKS_LOADED:
            return {
                ...state,
                all: action.payload,
                loading: false
            }
        case TASKS_CREATED:
            return {
                ...state,
                all: [...state.all, action.payload]
            }
        case TASKS_DELETED:
            return {
                ...state,
                all: state.all.filter(task => task._id !== action.payload._id)
            }
        case TASKS_CLEAN:
            return {
                ...state,
                all: []
            }
        default: 
            return state;
    }
}