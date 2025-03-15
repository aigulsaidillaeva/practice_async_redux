import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

const initialState = {
  isLoading: false,
  error: false,
  guns: [],
};

function gunReducer(state = initialState, action) {
  return state;
}
export const store = createStore(gunReducer, applyMiddleware(thunk));
