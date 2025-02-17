//Component for managing the different stores/states -- for future use
import {legacy_createStore as createStore, applyMiddleware, compose, combineReducers,} from "redux";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  //future reducers go here
});

let enhancer;
if (import.meta.env.MODE === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
