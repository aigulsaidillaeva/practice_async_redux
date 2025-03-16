import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { GUN_ACTION_TYPES } from "./constants";

const initialState = {
  isLoading: false,
  error: null,
  guns: [],
  gun: {},
};

function gunReducer(state = initialState, action) {
  if (action.type === GUN_ACTION_TYPES.IS_PANDING) {
    return { ...state, isLoading: action.payload };
  }

  if (action.type === GUN_ACTION_TYPES.ERROR) {
    return { ...state, error: action.payload };
  }
  if (action.type === GUN_ACTION_TYPES.GET_GUN) {
    return {
      ...state,
      isLoading: false,
      error: null,
      guns: action.payload,
    };
  }
  if (action.type === GUN_ACTION_TYPES.GET_GUN_BY_ID) {
    return {
      ...state,
      isLoading: false,
      error: null,
      gun: action.payload,
    };
  }

  return state;
}
export const store = createStore(gunReducer, applyMiddleware(thunk));
